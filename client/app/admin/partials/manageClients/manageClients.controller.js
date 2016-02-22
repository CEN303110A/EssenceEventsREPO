'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('ManageClientsCtrl', function ($scope) {
    $scope.message = 'Hello';
    //var self = this;

    var data = [{name: "test user", phoneNumber:"1231233" , email:"lskdfjaldjf"} , {name: 'user2',phoneNumber:"12343" , email:"ldsfjf" }];//, phoneNumber: "555-5555", email: "test@test.com"}];
    $scope.data = data;
    //$scope.tableParams = new NgTableParams({} , {dataset: data});
  });
