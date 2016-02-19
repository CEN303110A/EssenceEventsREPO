'use strict';

describe('Directive: adminNav', function () {

  // load the directive's module and view
  beforeEach(module('essenceEventsRepoApp.admin'));
  beforeEach(module('app/admin/partials/adminNav/adminNav.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<admin-nav></admin-nav>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the adminNav directive');
  }));
});
