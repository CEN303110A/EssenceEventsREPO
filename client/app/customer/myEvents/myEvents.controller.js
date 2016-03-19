'use strict';

angular.module('essenceEventsRepoApp')
.controller('MyEventsCtrl',  ['$scope' , '$stateParams', function ($scope, $stateParams) {
  $scope.message = 'Hello';


  $scope.initialize = function(){

    $scope.ev = $stateParams.eventt;
    let the_event = $scope.ev;
    $scope.ev_name = the_event.name;
    $scope.ev_date = the_event.date;
    $scope.ev_loc  = the_event.location;
    console.log(the_event);

  };

}]);
