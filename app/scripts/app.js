'use strict';

var angular = require('angular');

var log = msg => {
    console.log(msg);
};

angular
    .module('flowbarApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: require('../views/main.html'),
                controller: require('./controllers/main')
            })
            .when('/things', {
                template: require('../views/things.html'),
                controller: require('./controllers/thing')
            })
            .otherwise({
                redirectTo: '/'
            });

        log('Started');
    }]);
