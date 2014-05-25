'use strict';

var Thing = require('../../../lib/models/thing');

module.exports = ['$scope', '$http', function ThingCtrl ($scope, $http) {
    $http.get('/api/awesomeThings').success(function (awesomeThings) {
        $scope.awesomeThings = Thing.createFromArray(awesomeThings);
    });
}];