'use strict';

angular.module('essenceEventsRepoApp')
.controller('MyEventsCtrl',  ['$scope' , '$stateParams', '$state', function ($scope, $stateParams, $state) {
  $scope.message = 'Hello';

  if ($stateParams.eventt[0])
    $state.go('customer');
  $scope.ev = $stateParams.eventt;

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
