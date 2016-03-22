'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('rentals', {
        url: '/rentals',
        templateUrl: 'app/rentals/rentals.html',
        controller: 'RentalsCtrl'
      });
  });
