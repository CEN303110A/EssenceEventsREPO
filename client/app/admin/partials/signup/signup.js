'use strict';

angular.module('essenceEventsRepoApp.admin')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.createAccount', {
        url: '/createAccount',
        templateUrl: 'app/admin/partials/signup/signup.html',
        controller: 'SignupController',
        authenticate: 'admin',
        controllerAs: 'vm'
      });
  });
