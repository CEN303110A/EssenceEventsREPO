'use strict';

angular.module('essenceEventsRepoApp')
  .controller('DeleteUserPageCtrl', ['$scope','$stateParams', function ($scope, $stateParams) {
    //Display the name of the user to be deleted
    $scope.userToDelete = $stateParams.usersName;
  }]);
