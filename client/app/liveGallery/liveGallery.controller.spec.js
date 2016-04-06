'use strict';

describe('Controller: LiveGalleryCtrl', function () {

  // load the controller's module
  beforeEach(module('essenceEventsRepoApp'));

  var LiveGalleryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LiveGalleryCtrl = $controller('LiveGalleryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
