'use strict';

angular
  .module('flowbarApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/things', {
        templateUrl: 'views/things.html',
        controller: 'ThingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
