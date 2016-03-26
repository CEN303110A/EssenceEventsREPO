'use strict';

angular.module('essenceEventsRepoApp')
  .controller('DeleteUserPageCtrl', ['$scope','$stateParams', function ($scope, $stateParams) {

    console.log($stateParams);

    $scope.userToDelete = $stateParams.usersName;
  }]);
