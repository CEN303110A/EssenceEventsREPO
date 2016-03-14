'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('CreateEventCtrl', function ($scope, $stateParams, $state) {

      $scope.message = 'Hello';

      //handle people trying to hit url directly.
      if($stateParams.userID == 'undefined')
      {
        console.log('noUserIdPassed');
        $state.go('admin.manageClients');
      }

      console.log($stateParams);
  });
