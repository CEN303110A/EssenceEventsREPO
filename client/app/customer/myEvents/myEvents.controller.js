'use strict';

angular.module('essenceEventsRepoApp')
.controller('MyEventsCtrl',  ['$scope' , '$stateParams', function ($scope, $stateParams) {
  $scope.message = 'Hello';


  $scope.initialize = function(){
    console.log("here in initialize");
    $scope.event = $stateParams.eventt;
    // console.log("here in initialize");
    // console.log("user id: " + $scope.user_id);
    // console.log("user name: " + $scope.clientName);
    console.log("event: " : $scope.event);

  };

}]);
