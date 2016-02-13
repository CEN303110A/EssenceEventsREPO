'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reservations', {
        url: '/reservations',
        templateUrl: 'app/reservations/reservations.html',
        controller: 'ReservationsCtrl'
      });
  });
