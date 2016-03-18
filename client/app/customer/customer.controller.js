'use strict';

angular.module('essenceEventsRepoApp')
  .controller('CustomerCtrl', [  '$scope', '$stateParams', '$state', function (  $scope, $stateParams, $state) {
    $scope.message = 'Hello';
    $scope.clientName = $stateParams.userName;
    $scope.id = $stateParams.userID;

    $scope.getName = function(){

    };

    $scope.getEvents = function(){

    };



  }]);
