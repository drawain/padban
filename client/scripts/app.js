'use strict';

var angular = require('angular');

module.exports = angular
    .module('flowbarApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ui.bootstrap',
        'ui.tree'
    ])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: require('../views/board.html'),
                controller: require('./controllers/board')
            })
            .when('/things', {
                template: require('../views/things.html'),
                controller: require('./controllers/thing')
            })
            .when('/trees', {
                template: require('../views/trees.html'),
                controller: require('./controllers/trees')
            })
            .otherwise({
                redirectTo: '/'
            });
    }])

    .filter('bootstrapColumn', require('./filters/bootstrapColumn'));