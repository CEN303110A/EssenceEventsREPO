'use strict';

describe('Controller: ManageClientsCtrl', function () {

  // load the controller's module
  beforeEach(module('essenceEventsRepoApp'));

  var ManageClientsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageClientsCtrl = $controller('ManageClientsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
