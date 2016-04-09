'use strict';

angular.module('essenceEventsRepoApp.admin')
.controller('ManageEventModalCtrl', ['$scope', '$state', '$q', '$modalInstance', 'event', 'Events', 'Subcontractors', function ($scope, $state, $q, $modalInstance, event, Events, Subcontractors)
{

    //Copy object so we don't change main page concurrently and setup subcontractors
  $scope.event = JSON.parse(JSON.stringify(event));
  $scope.event.subcons = [];
  $scope.currentCost = 0;
  $scope.currentCost = $scope.event.budgetGoal - $scope.event.budget[0].amount;
  console.log($scope.event.budgetGoal, $scope.event.budget[0].amount)
  //$scope.currentCost = $scope.event.currCost;

  //hideDeleteTab with functionality
  $scope.hideDeleteTab = true;

  $scope.showDeleteTabFunc = function()
  {
    $scope.hideDeleteTab = false;
  }

  $scope.hideDeleteTabFunc = function()
  {
    $scope.hideDeleteTab = true;
  }

  //deleteEvent
  $scope.deleteEvent = function()
  {
    Events.remove(event._id).then(function()
      {
        $modalInstance.close();
        $state.reload();
      }
    );
  }


//this is for Basic Info
$scope.datePicker = {opened: false, scheduleDateOpened: false};
$scope.open = function($event) {
  $event.preventDefault();
  $event.stopPropagation();
  $scope.datePicker.opened = true;
};


//used for Schedule Tab,
$scope.scheduleDateOpen = function($event) {
  $event.preventDefault();
  $event.stopPropagation();
  $scope.datePicker.scheduleDateOpened = true;
};


//adds item into todo list
$scope.addToDo = function(todo, date)
{
  if (todo && date) {
    $scope.event.toDoList.push({todo: todo, by: date, done: false});
    return 1;
  }
  else
  return 0;
};

//Change todo checkbox
$scope.changeDone = function(index) {
  $scope.event.toDoList[index].done = !$scope.event.toDoList[index].done;
};

//Load subcontractors for select dropdown
$scope.getContractors = function() {
  Subcontractors.getAll()
  .then(function(response) {
    $scope.subcontractors = response.data;
  }, function(err) {
    //do something
  });
};

//Finds all subcontractors by id
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

//If unique, adds the new subcontractor
$scope.addSubcontractor = function(contractor) {
  if (contractor)
  if ($scope.event.subcontractors.indexOf(contractor._id) === -1) {
    $scope.event.subcons.push(contractor);
    $scope.event.subcontractors.push(contractor._id);
    return 1;
  }
  else
  return 0;
};

//Push a guest object to the array
$scope.addGuest = function(name, email, phoneNumber, partySize) {
  if(name && email) {
    $scope.event.guests.push({name: name, email: email, phoneNumber: phoneNumber, partySize: partySize, accepted: false});
    return 1;
  }
  else
  return 0;
};

//Remove a guest from the array
$scope.deleteGuest = function(index) {
  $scope.event.guests.splice(index, 1);
};

//Change the guest accepted checkbox
$scope.changeAccepted = function(index) {
  $scope.event.guests[index].accepted = !$scope.event.guests[index].accepted;
};

//Check if array is empty
$scope.hasItems = function(arr)
{
  return (arr.length > 0);
};

//Push budget object
$scope.addBudget = function(item, cost)
{
  if (item && cost) {

    //ADD IF STATEMENT FOR ERROR HANDLING
    if($scope.event.budget[0].amount >= cost) {
      $scope.event.budget[0].amount = $scope.event.budget[0].amount - cost;
      $scope.addItemStyle = {};
      $scope.errorMessege = "";
      $scope.event.budget.push({title: item, amount: cost});
      $scope.currentCost = $scope.currentCost + cost;
    }
    else {
      $scope.errorMessege = "You went over budget!";

      $scope.addItemStyle = {
        "border-color" : "red",
        "border-width": "3px",
        "border-style": "groove"
      }
    }
    return 1;
  }
  else
  return 0;
}

//deletes item from todo list
$scope.deleteToDo = function(index) {
  $scope.event.toDoList.splice(index, 1);
};

//Delete a budget object and update current cost
$scope.deleteBudget = function(index)
{
  $scope.event.budget[0].amount = $scope.event.budget[0].amount + $scope.event.budget[index].amount;
  $scope.currentCost = $scope.currentCost - $scope.event.budget[index].amount;
  $scope.event.budget.splice(index, 1);
};

//Remove a subcontractor object
$scope.deleteSubcon = function(index) {
  $scope.event.subcontractors.splice($scope.event.subcontractors.indexOf($scope.event.subcons[index]._id), 1);
  $scope.event.subcons.splice(index, 1);
};

//Update the object on save call
$scope.submit = function() {
  if ($scope.event.name && $scope.event.date)
  Events.update($scope.event)
  .then(function(response) {
    $modalInstance.close();
    $state.reload();
  }, function(err) {
    console.log(err);
  });
};


}]);
