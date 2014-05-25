"use strict";

var compress = require('koa-compress');
var logger = require('koa-logger');
var json = require('koa-json');
var serve = require('koa-static');
var koa = require('koa');
var path = require('path');
var app = module.exports = koa();

var monk = require('monk');
var wrap = require('co-monk');
var fs = require('fs');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./lib/config/config');
monk.db = monk(config.mongo.uri, config.mongo.options);

// Bootstrap models
var modelsPath = path.join(__dirname, 'lib/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  if (/(.*)\.(js$|coffee$)/.test(file)) {
    require(modelsPath + '/' + file);
  }
});

// Populate empty DB with sample data
require('./lib/config/dummydata');

// Logger
app.use(logger());

// JSON formatter
var formatResponse = function(mw) {
    return function *(next) {
        if (/\/api\//.test(this.path)) {
            yield mw.call(this, next);
        } else {
            yield next;
        }
    };
};

app.use(formatResponse(json()));

// Setup controllers
var controllersPath = path.join(__dirname, 'lib/controllers');
fs.readdirSync(controllersPath).forEach(function (file) {
  if (/(.*)\.(js$|coffee$)/.test(file)) {
    require(controllersPath + '/' + file)(app);
  }
});

// Serve static files
app.use(serve(path.join(__dirname, 'app')));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(config.port, config.ip);
  console.log('Koa server listening on %s:%d, in %s mode', config.ip, config.port, app.env);
}