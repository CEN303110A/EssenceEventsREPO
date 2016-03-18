'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageEventModalCtrl', ['$scope', '$state', '$q', '$modalInstance', 'event', 'Events', 'Subcontractors', function ($scope, $state, $q, $modalInstance, event, Events, Subcontractors)
  {
      $scope.event = JSON.parse(JSON.stringify(event));
      $scope.event.subcons = [];
      $scope.currentCost = 0;
      for (var i = 0; i < $scope.event.budget.length; i++)
	$scope.currentCost = $scope.currentCost + $scope.event.budget[i].amount;

      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
      };

      $scope.getContractors = function() {
	Subcontractors.getAll()
	  .then(function(response) {
	    $scope.subcontractors = response.data;
	  }, function(err) {
	    //do something
	});
      };

      $scope.getEventSubcons = function() {
	var promises = $scope.event.subcontractors.map(function(subcon) {
	  return Subcontractors.getOne(subcon);
	});
	$q.all(promises)
	  .then(function(response) {
	    response.forEach(function(r) {
	      $scope.event.subcons.push(r.data);
	    });
	  }, function(err) {
	    //do something
	});
      };

      $scope.addSubcontractor = function(contractor) {
	if ($scope.event.subcontractors.indexOf(contractor._id) === -1) {
	  $scope.event.subcons.push(contractor);
	  $scope.event.subcontractors.push(contractor._id);
	}
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

      $scope.deleteSubcon = function(index) {
	$scope.event.subcontractors.splice($scope.event.subcontractors.indexOf($scope.event.subcons[index]._id), 1);
	$scope.event.subcons.splice(index, 1);
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