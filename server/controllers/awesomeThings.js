'use strict';

var route = require('koa-route');
var json = require('koa-json');

var monk = require('monk');
var wrap = require('co-monk');
var things = wrap(monk.db.get('things'));

var getThings = function*() {
    this.body = yield things.find({});
};

module.exports = function(app) {
    app.use(route.get('/api/awesomeThings', getThings));
};