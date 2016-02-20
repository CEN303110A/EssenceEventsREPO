'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('test', {
        url: 'manageUsers',
        templateUrl: 'app/admin/partials/test/test.html',
        controller: 'TestCtrl'
      });
  });
