'use strict';

angular.module('essenceEventsRepoApp')
.controller('CustomerCtrl', [ 'Events', '$scope', '$stateParams', '$state', function ( Events,  $scope, $stateParams, $state) {
  $scope.message = 'Hello';
  $scope.clientName = $stateParams.userName;
  $scope.id = $stateParams.userID;
  //  console.log("userid: " + $scope.id);
  //  console.log("username: " + $scope.clientName);
  /*
  $scope.getName = function(){

};

$scope.getEvents = function(){

}; */

$scope.getEvents = function() {
  //console.log("Get events called" );
  Events.getByUser($scope.id)
  .then(function(response) {
    $scope.events = response.data;
    //console.log($scope.events);
  }, function(err) {
    //do something
    console.log(err);
  });
};

$scope.openEvent = function(id){
  console.log("Event  : " + id);
}

$scope.navigate = function(eevent){

  console.log("here in navigate");
  console.log(eevent);
  $state.go('myEvents' ,{eventt: eevent});

}
}]);
