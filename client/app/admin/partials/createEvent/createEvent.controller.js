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

  //set up date for event
  $scope.eventDate = new Date();
  $scope.eventDate.setHours(0,0,0,0);
  $scope.openEventDate = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.eventDateOpened = true;
  };

  // $scope.freeCash;
  $scope.currCost = 0;
  $scope.myStyle='';
  $scope.thingsToDo = [];
  $scope.budget = [
    {
      title: "Free Cash",
      amount: $scope.freeCash
    }
  ];
  $scope.updateFreeCash = function()
  {
    if ($scope.budgetGoal < $scope.currCost) {
      $scope.mybudgetGoalStyle = {
        "border-color" : "red",
        "border-width": "3px",
        "border-style": "groove"
      }
      $scope.budgetGoal = $scope.freeCash + $scope.currCost;
    }
    else if($scope.currCost) {
      $scope.freeCash = $scope.budgetGoal-$scope.currCost;
      $scope.mybudgetGoalStyle = {};
      $scope.changeFreeCashArr();
    }
    else {
      $scope.freeCash = $scope.budgetGoal
      $scope.changeFreeCashArr();
      $scope.mybudgetGoalStyle = {};
    }
  }
  // $scope.addBudgetGoal = function()
  // {
  //   if($scope.budgetGoal && $scope.budget.length == 0 )
  //   $scope.budget.push({title: "Free Cash", amount: $scope.freeCash});
  // }
  $scope.changeFreeCashArr = function()
  {
    $scope.budget[0] = ({title: "Free Cash", amount: $scope.freeCash});
    console.log("you good fam");
  }

  $scope.hasItems = function(arr)
  {
    return (arr.length > 0);
  };
  $scope.budgetHasItems = function(arr)
  {
    return (arr.length > 1);
  };
  $scope.delete = function(arr, index)
  {
    $scope.freeCash = $scope.freeCash + $scope.budget[index].amount;
    $scope.changeFreeCashArr();
    $scope.currCost -=$scope.budget[index].amount;

    arr.splice(index, 1);
  };
  $scope.addBudget = function()
  {
    if ($scope.budgetItem && $scope.itemCost && $scope.freeCash >= $scope.itemCost) {
      $scope.budget.push({title: $scope.budgetItem, amount: $scope.itemCost});
      $scope.freeCash = $scope.freeCash - $scope.itemCost;
      $scope.currCost += $scope.itemCost;
      $scope.myBudgetStyle = {}
      $scope.changeFreeCashArr();
      $scope.budgetItem = null;
      $scope.itemCost = null;
    }
    else {
      $scope.myBudgetStyle = {
        "border-color" : "red",
        "border-width": "3px",
        "border-style": "groove"
      }
      alert("Invalid input");
    }
    // $scope.budgetItem = null;
    // $scope.itemCost = null;
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


  //adds item into todo list

  //set up date for event
  $scope.todoDate = new Date();
  $scope.opentodoDate = function($event) {
    console.log('in here');
    $event.preventDefault();
    $event.stopPropagation();
    $scope.todoDateOpened = true;
  };

  $scope.addToDo = function()
  {
    if ($scope.todoInput)
    $scope.thingsToDo.push({todo: $scope.todoInput, by: $scope.todoDate});
    $scope.todoDate = '';
    $scope.todoInput = '';
  };


  //deletes item from todo list
  $scope.deletethingsToDo = function(arr, index)
  {
    arr.splice(index,1);
  }



  $scope.submit = function() {
    $scope.eventDate.setHours(0,0,0,0);
    var event = {
      name: $scope.eventName,
      date: $scope.eventDate,
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
