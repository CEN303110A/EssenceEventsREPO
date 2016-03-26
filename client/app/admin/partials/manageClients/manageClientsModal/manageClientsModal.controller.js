'use strict';

angular.module('essenceEventsRepoApp.admin')
.controller('ManageClientsModalCtrl', ['$scope', '$state', '$modal', '$modalInstance', 'user', 'Events', function ($scope, $state, $modal, $modalInstance, user, Events)
{
  $scope.username = user.name;
  $scope.email = user.email;
  $scope.phoneNumber = user.phoneNumber;
  $scope.deleteHTML = false;


  //submit function
  $scope.submit = function(username, email, phoneNumber) {

    user.name = username;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.$save();
    $modalInstance.close();
  };

  //createEvent
  $scope.createEvent = function()
  {
    $modalInstance.close();
    $state.go('admin.createEvent', {userID : user._id, usersName : user.name});
  };

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

  //implementing delete within modal
  // $scope.deleteUser = function()
  // {
  //   $modalInstance.close();
  //   $state.go('admin.deleteUserPage', {userID : user._id, usersName : user.name})
  // }

  //logic for delete user page
  $scope.toggleDeleteUser = function()
  {
    $scope.deleteHTML = !($scope.deleteHTML);
  }

  $scope.refreshDeleteUserHTML = function()
  {
    $scope.deleteHTML = false;
  }

  $scope.deleteUser = function() {
    $modalInstance.close();
    user.$remove().then($state.reload());
  }
}]);
