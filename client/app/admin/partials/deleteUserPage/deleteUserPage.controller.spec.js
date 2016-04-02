'use strict';

describe('Controller: DeleteUserPageCtrl', function () {

  // load the controller's module
  beforeEach(module('essenceEventsRepoApp'));

  var DeleteUserPageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeleteUserPageCtrl = $controller('DeleteUserPageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
