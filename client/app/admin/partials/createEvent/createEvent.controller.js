'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('CreateEventCtrl', function ($scope, $stateParams, $state) {

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

      $scope.hasItems = function()
      {
        return ($scope.thingsToDo.length > 0);
        // return !($scope.thingsToDo);
      }

      //adds item into todo list
      $scope.add = function()
      {
        $scope.thingsToDo.push({task : $scope.todoInput})
        $scope.todoInput = '';
      }
  });
