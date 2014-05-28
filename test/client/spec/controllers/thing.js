'use strict';

describe('Controller: ThingCtrl', function () {

    var Ctrl = require('../../../../client/scripts/controllers/thing'),
        MainCtrl,
        scope;

    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
        scope = $rootScope.$new();

        MainCtrl = $controller(Ctrl, {
            $scope: scope
        });

        $httpBackend.when('GET', '/api/awesomeThings').respond([
            { name: 'test1', info: 'testInfo1', awesomeness: 1 },
            { name: 'test2', info: 'testInfo2', awesomeness: 2 }
        ]);
    }));

    it('should attach a list of awesomeThings to the scope', inject(function ($http) {
//        expect(scope.awesomeThings.length).toBe(1);
    }));
});
