'use strict';

angular.module('essenceEventsRepoApp')
.controller('CustomerCtrl', [ 'Events', '$scope', '$stateParams', '$state', function ( Events,  $scope, $stateParams, $state) {
  $scope.message = 'Hello';
  $scope.clientName = $stateParams.userName;
  $scope.id = $stateParams.userID;
  $scope.events = $stateParams.events;
  console.log($scope.events);
  //  console.log("userid: " + $scope.id);
  //  console.log("username: " + $scope.clientName);
  /*
  $scope.getName = function(){

};

$scope.getEvents = function(){

}; */

$scope.getEvents = function() {

  

};

$scope.openEvent = function(id){
  console.log("Event  : " + id);
}

$scope.navigate = function(eevent){

  $state.go('myEvents' ,{eventt: eevent});

}
}]);