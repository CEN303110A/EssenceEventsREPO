'use strict';

angular.module('essenceEventsRepoApp')
.controller('MyEventsCtrl',  ['$scope' , '$stateParams', '$state', 'Events', function ($scope, $stateParams, $state, Events) {
  $scope.message = 'Hello';

  if ($stateParams.eventt[0])
    $state.go('customer');
  $scope.ev = $stateParams.eventt;

  $scope.changeDone = function(index) {
    $scope.ev.toDoList[index].done = !$scope.ev.toDoList[index].done;
    var body = {
      index: index,
      bool: $scope.ev.toDoList[index].done
    };
    Events.toggleTodo($scope.ev._id, body)
      .then(function(response) {
	console.log('done');
      }, function(err) {
	//do something
    });
  };

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

    //Calendar stuff
    $scope.calendarView = 'month';
    $scope.calendarDate = new Date();
    $scope.todo = [];
    for (var i = 0; i < $scope.ev.toDoList.length; i++)
      $scope.todo.push({title: $scope.ev.toDoList[i].todo, type: 'info', startsAt: new Date($scope.ev.toDoList[i].by)});
}]);
