'use strict';

angular.module('essenceEventsRepoApp')
.controller('MyEventsCtrl',  ['$scope' , '$stateParams', function ($scope, $stateParams) {
  $scope.message = 'Hello';
  //$scope.ev = "trash";

  $scope.initialize = function(){
    console.log("here in initialize");
    $scope.ev = $stateParams.eventt;
    console.log("event: " + $scope.ev);
    

  };

}]);
