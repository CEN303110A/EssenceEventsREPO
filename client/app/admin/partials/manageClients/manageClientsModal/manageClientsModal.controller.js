'use strict';

class ManageClientsModalCtrl{
  constructor($scope, $modalInstance, user){
    $scope.username = user.name;
    $scope.phoneNumber = user.phoneNumber;
    $scope.email = user.email;

  }

  submit(form){
    console.log('we here motherfucker');
  }


};

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageClientsModalCtrl', ManageClientsModalCtrl);

// angular.module('essenceEventsRepoApp.admin')
//   .controller('ManageClientsModalCtrl', function ($scope, $modalInstance, user)
//   {
//     $scope.username = user.name;
//     $scope.phoneNumber = user.phoneNumber;
//     $scope.email = user.email;
//     $scope.save = function(){
//
//       console.log('called save function');
//     };
//
//     console.log(user);
//   });
