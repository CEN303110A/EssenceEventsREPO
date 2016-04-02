'use strict';

angular.module('essenceEventsRepoApp.admin')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.deleteUserPage', {
        url: '/deleteUser',
        params: {
          userID: 'undefined',
          usersName: 'undefined'
        },
        templateUrl: 'app/admin/partials/deleteUserPage/deleteUserPage.html',
        controller: 'DeleteUserPageCtrl',
        authenticate: 'admin'
      });
  });
