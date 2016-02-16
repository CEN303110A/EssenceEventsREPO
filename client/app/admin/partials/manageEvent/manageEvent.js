'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manageEvent', {
        url: '/manageEvent',
        templateUrl: 'app/admin/partials/manageEvent/manageEvent.html',
        controller: 'ManageEventCtrl',
        authenticate: 'admin'
      });
  });
