'use strict';

var route = require('koa-route');
var views = require('co-views');
var parse = require('co-body');

var messages = [
  { id: 0, message: 'Koa next generation web framework for node.js' },
  { id: 1, message: 'Koa is a new web framework designed by the team behind Express' }
];

var render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

var home = function *home() {
  this.body = yield render('list', { 'messages': messages });
};

var list = function *list() {
  this.body = yield messages;
};

var fetch = function *fetch(id) {
  var message = messages[id];
  if (!message) {
    this.throw(404, 'message with id = ' + id + ' was not found');
  }
  this.body = yield message;
};

var create = function *create() {
  var message = yield parse(this);
  message.id = messages.push(message) - 1;
  this.redirect('/');
};

function doSomeAsync() {
  return function (callback) {
    setTimeout(function () {
      callback(null, 'this was loaded asynchronously and it took 3 seconds to complete');
    }, 3000);
  };
}

// One way to deal with asynchronous call
var delay = function *delay() {
  this.body = yield doSomeAsync();
};

module.exports = function(app) {
    app.use(route.get('/', home));
    app.use(route.get('/messages', list));
    app.use(route.get('/messages/:id', fetch));
    app.use(route.post('/messages', create));
    app.use(route.get('/async', delay));
};