'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('corporate', {
        url: '/corporate',
        templateUrl: 'app/corporate/corporate.html',
        controller: 'CorporateCtrl'
      });
  });
