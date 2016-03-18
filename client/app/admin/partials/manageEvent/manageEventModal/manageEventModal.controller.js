'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageEventModalCtrl', ['$scope', '$state', '$modalInstance', 'event', 'Events', function ($scope, $state, $modalInstance, event, Events)
  {
      $scope.event = JSON.parse(JSON.stringify(event));
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

      $scope.submit = function() {
	console.log($scope.event);
	Events.update($scope.event)
	  .then(function(response) {
	    $modalInstance.close();
	    $state.reload();
	  }, function(err) {
	    console.log(err);
	});
      };
}]);