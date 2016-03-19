'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myEvents', {
        url: '/myEvents',
        params: {
          eventt: ["-"]
        },
        templateUrl: 'app/customer/myEvents/myEvents.html',
        controller: 'MyEventsCtrl',
        controllerAs: 'myEv'
      });
  });
