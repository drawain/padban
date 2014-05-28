'use strict';

describe('Controller: MainCtrl', function () {

    var Ctrl = require('../../../../client/scripts/controllers/main'),
        MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        MainCtrl = $controller(Ctrl, {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});
