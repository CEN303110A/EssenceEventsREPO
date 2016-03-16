'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageClientsModalCtrl', ['$scope', '$state', '$modalInstance', 'user', 'Events', function ($scope, $state, $modalInstance, user, Events)
  {
      $scope.username = user.name;
      $scope.email = user.email;
      $scope.phoneNumber = user.phoneNumber;

      //submit function
      $scope.submit = function(username, email, phoneNumber) {

          user.name = username;
          user.email = email;
          user.phoneNumber = phoneNumber;
          user.$save();
          console.log(user);

          $modalInstance.close();
      };

      //createEvent
      $scope.createEvent = function()
      {
	Events.getAll().then(function(response) {
	  $modalInstance.close();
          $state.go('admin.createEvent', {userID : user._id});
	  }, function(err) {
        });
      };

  }]);
