'use strict';

angular.module('essenceEventsRepoApp.admin')
.controller('ManageClientsModalCtrl', ['$scope', '$state', '$modal', '$modalInstance', 'user', 'Events', '$cookies', function ($scope, $state, $modal, $modalInstance, user, Events, $cookies)
{
  //Instantiate $scope variables so they show up in modal
  $scope.username = user.name;
  $scope.email = user.email;
  $scope.phoneNumber = user.phoneNumber;
  $scope.deleteHTML = false;


  //submit function
  $scope.submit = function(username, email, phoneNumber) {
    if (username && email) {
      user.name = username;
      user.email = email;
      user.phoneNumber = phoneNumber;
      user.$save({access_token: $cookies.get('token')}).then(function () {
        $modalInstance.close();
	$state.reload();
      });
    }
  };

  //createEvent
  $scope.createEvent = function()
  {
    $modalInstance.close();
    $state.go('admin.createEvent', {userID : user._id, usersName : user.name});
  };

  //Get all events for the user
  $scope.getEvents = function() {
    $scope.events = null;
    Events.getByUser(user._id)
    .then(function(response) {
      if (response.data.length > 0)
      $scope.events = response.data;
    }, function(err) {
      //do something
    });
  };

  //Switches states to Manage Events and opens the modal for the event clicked
  $scope.manageEvent = function(event) {
    $modalInstance.close();
    $state.go('admin.manageEvent');
    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'app/admin/partials/manageEvent/manageEventModal/manageEventModal.html',
      controller: 'ManageEventModalCtrl',
      resolve: {
        event: function()
        {
          return event;
        }
      }
    });
  };

  //logic for delete user page
  $scope.toggleDeleteUser = function()
  {
    $scope.deleteHTML = !($scope.deleteHTML);
  }

  $scope.refreshDeleteUserHTML = function()
  {
    $scope.deleteHTML = false;
  }

  //Remove user from database and then reload the state
  $scope.deleteUser = function() {
    $modalInstance.close();
    Events.removeUser(user._id);
    user.$remove({access_token: $cookies.get('token')}).then($state.reload());
  }

  //Close modal without making changes
  $scope.cancel = function() {
    $modalInstance.close();
  }
}]);
