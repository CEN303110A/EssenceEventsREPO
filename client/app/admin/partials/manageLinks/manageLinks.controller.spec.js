'use strict';

describe('Controller: ManageLinksCtrl', function () {

  // load the controller's module
  beforeEach(module('essenceEventsRepoApp'));

  var ManageLinksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageLinksCtrl = $controller('ManageLinksCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
