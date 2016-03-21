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
    $scope.ev_budget = the_event.budget;
    $scope.ev_toDoList = the_event.toDoList;
    // console.log(the_event);
    // console.log($scope.ev_budget);
    console.log($scope.ev_toDoList)
  }
    // Pi chart for budget
    $scope.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function(d){return d.title;},
        y: function(d){return d.amount;},
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };

    //Todo list
    $scope.hasItems = function(arr)
    {
      return (arr.length > 0);
    };

}]);
