'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('links', {
        url: '/links',
        templateUrl: 'app/links/links.html',
        controller: 'LinksCtrl'
      });
  });
