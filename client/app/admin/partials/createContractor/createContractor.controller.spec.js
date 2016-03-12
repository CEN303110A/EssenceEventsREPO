'use strict';

describe('Controller: CreateContractorCtrl', function () {

  // load the controller's module
  beforeEach(module('essenceEventsRepoApp'));

  var CreateContractorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateContractorCtrl = $controller('CreateContractorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
