'use strict';

angular.module('essenceEventsRepoApp.admin')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.manageEvent', {
        url: '/manageEvent',
        templateUrl: 'app/admin/partials/manageEvent/manageEvent.html',
        controller: 'ManageEventCtrl',
        authenticate: 'admin'
      });
  });
