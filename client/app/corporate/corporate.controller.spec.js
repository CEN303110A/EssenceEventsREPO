'use strict';

describe('Controller: CorporateCtrl', function () {

  // load the controller's module
  beforeEach(module('essenceEventsRepoApp'));

  var CorporateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CorporateCtrl = $controller('CorporateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
