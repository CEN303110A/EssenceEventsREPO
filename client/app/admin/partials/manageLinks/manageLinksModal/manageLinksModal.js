 'use strict';
  
  angular.module('essenceEventsRepoApp.admin')
    .config(function ($stateProvider) {
      $stateProvider
        .state('manageLinksModal', {
          url: '/manageLinksModal',
          templateUrl: 'app/admin/partials/manageLinks/manageLinksModal/manageLinksModal.html',
          controller: 'ManageLinksModalCtrl',
          controllerAs: 'mancon',
         authenticate: 'admin'
        });
    });
