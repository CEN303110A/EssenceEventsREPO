'use strict';

angular.module('essenceEventsRepoApp.admin')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.manageLinks', {
        url: '/manageLinks',
        templateUrl: 'app/admin/partials/manageLinks/manageLinks.html',
        controller: 'ManageLinksCtrl',
        authenticate: 'admin'
      });
  });
