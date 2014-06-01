'use strict';

describe('Controller: BoardCtrl', function () {

    var Ctrl = require('../../../../client/scripts/controllers/board'),
        mockedBoard = require('../../../mocks/board'),
        $http,
        BoardCtrl,
        scope;

    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
        scope = $rootScope.$new();

        BoardCtrl = $controller(Ctrl, {
            $scope: scope
        });

        $httpBackend.when('GET', '/api/board').respond(mockedBoard);
        $http = $httpBackend;
    }));


    it('should attach a list of awesomeThings to the scope', function () {
        $http.flush();
        expect(scope.board).toEqual(mockedBoard);
    });
});
