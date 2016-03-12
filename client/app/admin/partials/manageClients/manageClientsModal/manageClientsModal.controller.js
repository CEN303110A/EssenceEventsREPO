'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageClientsModalCtrl', function ($scope, $modalInstance, user)
  {
    $scope.username = user.name;
    $scope.phoneNumber = user.phoneNumber;
    $scope.email = user.email;
    $scope.submit = function(){
      console.log('called save function');
    };

    // console.log(user);
  });
