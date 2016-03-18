'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageEventModalCtrl', ['$scope', '$state', '$modalInstance', 'event', 'Events', function ($scope, $state, $modalInstance, event, Events)
  {
      $scope.event = event;
      $scope.currentCost = 0;
      for (var i = 0; i < $scope.event.budget.length; i++)
	$scope.currentCost = $scope.currentCost + $scope.event.budget[i].amount;

      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
      };

      $scope.hasItems = function(arr)
      {
        return (arr.length > 0);
      };

      //adds item into todo list
      $scope.addToDo = function(todo)
      {
	if (todo)
          $scope.event.toDoList.push(todo);
      };

      $scope.addBudget = function(item, cost)
      {
	console.log(item, cost);
	if (item && cost) {
	  $scope.event.budget.push({title: item, amount: cost});
	  $scope.currentCost = $scope.currentCost + cost;
        }
      }

      //deletes item from todo list
      $scope.deleteToDo = function(index) {
	$scope.event.toDoList.splice(index, 1);
      };

      $scope.deleteBudget = function(index)
      {
	$scope.currentCost = $scope.currentCost - $scope.event.budget[index].amount;
        $scope.event.budget.splice(index, 1);
      };
/*
      $scope.submit = function() {
	var event = {
	  name: $scope.eventName,
	  date: $scope.dt,
	  location: $scope.venue,
	  userId: $stateParams.userID,
	  toDoList: $scope.thingsToDo,
	  budgetGoal: $scope.budgetGoal,
	  budget: $scope.budget
        };
	Events.create(event)
	  .then(function(response) {
	    $state.go('admin.manageEvent');
	  }, function(err) {
	    //do something
	});
      };
*/
}]);
