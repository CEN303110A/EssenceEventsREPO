'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('celebrations', {
        url: '/celebrations',
        templateUrl: 'app/celebrations/celebrations.html',
        controller: 'CelebrationsCtrl'
      });
  });
