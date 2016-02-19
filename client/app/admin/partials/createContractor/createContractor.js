'use strict';

angular.module('essenceEventsRepoApp.admin')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.createContractor', {
        url: '/createContractor',
        templateUrl: 'app/admin/partials/createContractor/createContractor.html',
        controller: 'CreateContractorCtrl',
        authenticate: 'admin'
      });
  });
