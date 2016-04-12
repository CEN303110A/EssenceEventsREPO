'use strict';

angular.module('essenceEventsRepoApp.admin')
.controller('resetModalCtrl', ['$scope', '$state', '$modalInstance', 'Email', 'email', 'vm', function ($scope, $state, $modalInstance, Email, email, vm)
{
  //Instantiate user object and copy email
  $scope.user = {
    email: '',
    phoneNumber: '',
  };
  $scope.user.email = JSON.parse(JSON.stringify(email));

  //Send reset request to server and add success/error to login page
  $scope.reset = function() {
    Email.resetPass($scope.user)
      .then(function(response) {
	vm.success = 'New password sent';
	vm.errors.other = null;
	$modalInstance.close();
      }, function(err) {
	vm.errors.other = 'Reset Failed!';
	$modalInstance.close();
    });
  }

  //Close modal without doing anything
  $scope.cancel = function() {
    $modalInstance.close();
  }
}]);
