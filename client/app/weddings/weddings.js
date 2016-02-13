'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('weddings', {
        url: '/weddings',
        templateUrl: 'app/weddings/weddings.html',
        controller: 'WeddingsCtrl'
      });
  });
