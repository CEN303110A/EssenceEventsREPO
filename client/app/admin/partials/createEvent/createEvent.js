'use strict';

angular.module('essenceEventsRepoApp.admin')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.createEvent', {
        url: '/createEvent/',
        params: {userID: 'undefined'},
        templateUrl: 'app/admin/partials/createEvent/createEvent.html',
        controller: 'CreateEventCtrl',
        authenticate: 'admin'
      });
  });
