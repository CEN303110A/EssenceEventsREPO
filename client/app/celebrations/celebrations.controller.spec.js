'use strict';

describe('Controller: CelebrationsCtrl', function () {

  // load the controller's module
  beforeEach(module('essenceEventsRepoApp'));

  var CelebrationsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CelebrationsCtrl = $controller('CelebrationsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
