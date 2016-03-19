 'use strict';
  
  angular.module('essenceEventsRepoApp.admin')
    .config(function ($stateProvider) {
      $stateProvider
        .state('manageContractorModal', {
          url: '/manageContractorModal',
          templateUrl: 'app/admin/partials/manageContractors/manageContractorModal/manageContractorModal.html',
          controller: 'ManageContractorModalCtrl',
          controllerAs: 'mancon',
         authenticate: 'admin'
        });
    });
