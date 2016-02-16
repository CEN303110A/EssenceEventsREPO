'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manageContractors', {
        url: '/manageContractors',
        templateUrl: 'app/admin/partials/manageContractors/manageContractors.html',
        controller: 'ManageContractorsCtrl',
        authenticate: 'admin'
      });
  });
