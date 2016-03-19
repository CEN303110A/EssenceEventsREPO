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
    if($scope.currCost)
      $scope.freeCash = $scope.budgetGoal-$scope.currCost;
    else
      $scope.freeCash = $scope.budgetGoal
    // if($scope.budget.length>1)
    //   $scope.freeCash = $scope.budgetGoal - $scope.sum()
    $scope.changeFreeCashArr();
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
      $scope.myStyle = {}
      $scope.changeFreeCashArr();
      $scope.budgetItem = null;
      $scope.itemCost = null;
    }
    else {
      $scope.myStyle = {
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
  $scope.addToDo = function()
  {
    if ($scope.todoInput)
    $scope.thingsToDo.push($scope.todoInput);
    $scope.todoInput = '';
  };
//deletes item from todo list
$scope.deletethingsToDo = function(arr, index)
{
  arr.splice(index,1);
}

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
