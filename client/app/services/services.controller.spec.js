'use strict';

describe('Controller: ServicesCtrl', function () {

  // load the controller's module
  beforeEach(module('essenceEventsRepoApp'));

  var ServicesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicesCtrl = $controller('ServicesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
