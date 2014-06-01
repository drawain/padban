'use strict';

var route = require('koa-route');
var mockedBoard = require('../../test/mocks/board');

module.exports = function(app) {
    app.use(route.get('/api/board', function*() {
        this.body = mockedBoard;
    }));
};