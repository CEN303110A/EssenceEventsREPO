'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('CreateEventCtrl', ['Events', '$scope', '$stateParams', '$state', function (Events, $scope, $stateParams, $state) {

      // $scope.message = 'Hello';

      //handle people trying to hit url directly.
      if($stateParams.userID == 'undefined')
      {
        console.log('noUserIdPassed');
        $state.go('admin.manageClients');
      }

      //used to display the user you are talking to
      $scope.clientName = $stateParams.usersName;
      console.log($stateParams);

      //set up date
      $scope.dt = new Date();
      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
      };

      $scope.thingsToDo = [];
      $scope.budget = [];

      $scope.hasItems = function(arr)
      {
        return (arr.length > 0);
      };

      //adds item into todo list
      $scope.addToDo = function()
      {
	if ($scope.todoInput)
          $scope.thingsToDo.push($scope.todoInput);
        $scope.todoInput = '';
      };

      $scope.addBudget = function()
      {
	if ($scope.budgetItem && $scope.itemCost)
	  $scope.budget.push({title: $scope.budgetItem, amount: $scope.itemCost});
	$scope.budgetItem = null;
	$scope.itemCost = null;
      }

      //deletes item from todo list
      $scope.delete = function(arr, index)
      {
        arr.splice(index, 1);
      };

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

}]);
