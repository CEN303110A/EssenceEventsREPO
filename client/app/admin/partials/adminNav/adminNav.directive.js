'use strict';

angular.module('essenceEventsRepoApp.admin')
  .directive('adminnav', () => ({
      templateUrl: 'app/admin/partials/adminNav/adminNav.html',
      restrict: 'E',
      controller: 'AdminController',
      controllerAs: 'admin'
      }));
