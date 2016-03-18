'use strict';

angular.module('essenceEventsRepoApp.admin')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.createEvent', {
        url: '/createEvent/',
        params: {
          userID: 'undefined',
          usersName: 'undefined'
        },
        templateUrl: 'app/admin/partials/createEvent/createEvent.html',
        controller: 'CreateEventCtrl',
        authenticate: 'admin'
      });
  });
