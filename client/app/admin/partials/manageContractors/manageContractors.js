'use strict';

angular.module('essenceEventsRepoApp.admin')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.manageContractors', {
        url: '/manageContractors',
        templateUrl: 'app/admin/partials/manageContractors/manageContractors.html',
        controller: 'ManageContractorsCtrl',
        authenticate: 'admin'
      });
  });
