 'use strict';
  
  angular.module('essenceEventsRepoApp.admin')
    .config(function ($stateProvider) {
      $stateProvider
        .state('resetModal', {
          url: '/resetModal',
          templateUrl: 'app/account/login/resetModal/resetModal.html',
          controller: 'resetModalCtrl',
        });
    });
