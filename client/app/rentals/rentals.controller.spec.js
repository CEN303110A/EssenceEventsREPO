'use strict';

describe('Controller: RentalsCtrl', function () {

  // load the controller's module
  beforeEach(module('essenceEventsRepoApp'));

  var RentalsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RentalsCtrl = $controller('RentalsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
