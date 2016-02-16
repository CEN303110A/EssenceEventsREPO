'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createContractor', {
        url: '/createContractor',
        templateUrl: 'app/admin/partials/createContractor/createContractor.html',
        controller: 'CreateContractorCtrl',
        authenticate: 'admin'
      });
  });
