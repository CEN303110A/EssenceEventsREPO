'use strict';

describe('Controller: MyEventsCtrl', function () {

  // load the controller's module
  beforeEach(module('essenceEventsRepoApp'));

  var MyEventsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyEventsCtrl = $controller('MyEventsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
