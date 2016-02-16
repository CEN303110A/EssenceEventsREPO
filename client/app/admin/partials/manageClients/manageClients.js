'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manageClients', {
        url: '/manageClients',
        templateUrl: 'app/admin/partials/manageClients/manageClients.html',
        controller: 'ManageClientsCtrl',
        authenticate: 'admin'
      });
  });
