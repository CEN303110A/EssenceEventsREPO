'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('aboutus', {
        url: '/aboutus',
        templateUrl: 'app/aboutus/aboutus.html',
        controller: 'AboutusCtrl'
      });
  });
