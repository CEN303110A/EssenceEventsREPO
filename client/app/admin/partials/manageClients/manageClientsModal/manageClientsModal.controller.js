'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageClientsModalCtrl', ['$scope', '$modalInstance', 'user', function ($scope, $modalInstance, user)
  {
    $scope.username = user.name;
    $scope.email = user.email;
    $scope.phoneNumber = user.phoneNumber;

    $scope.submit = function(username, email, phoneNumber) {
        console.log(username);
        //console.log();
        // user.name = "Hello!";
        // user.email = "2@3.com";
        // user.phoneNumber = "87354";
        console.log(email);
        console.log(phoneNumber);
        // // console.log(user);
        // // user.$save();
        // /*var user = {
        //   username: $scope.username,
        //   email: $scope.email,
        //   phoneNumber: $scope.phoneNumber
        // };
        // *
        //user.$save();
        user.name = username;
        user.email = email;
        user.phoneNumber = phoneNumber;
        user.$save();
        console.log(user);

        $modalInstance.close();
    };


  }]);
