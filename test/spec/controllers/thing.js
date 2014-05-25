'use strict';

describe('Controller: ThingctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('flowbarApp'));

  var ThingctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThingctrlCtrl = $controller('ThingctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
