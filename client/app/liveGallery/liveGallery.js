'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('liveGallery', {
        url: '/liveGallery',
        templateUrl: 'app/liveGallery/liveGallery.html',
        controller: 'LiveGalleryCtrl'
      });
  });
