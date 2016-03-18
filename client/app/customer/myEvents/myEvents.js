'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myEvents', {
        url: '/myEvents',
        templateUrl: 'app/customer/myEvents/myEvents.html',
        controller: 'MyEventsCtrl'
      });
  });
