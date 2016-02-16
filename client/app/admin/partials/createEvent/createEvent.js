'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createEvent', {
        url: '/createEvent',
        templateUrl: 'app/admin/partials/createEvent/createEvent.html',
        controller: 'CreateEventCtrl',
        authenticate: 'admin'
      });
  });
