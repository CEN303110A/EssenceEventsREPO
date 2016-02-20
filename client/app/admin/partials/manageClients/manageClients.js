'use strict';

angular.module('essenceEventsRepoApp.admin')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.manageClients', {
        url: '/manageClients',
        templateUrl: 'app/admin/partials/manageClients/manageClients.html',
        controller: 'ManageClientsCtrl',
        authenticate: 'admin'
      });
  });
