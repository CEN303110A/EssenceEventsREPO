'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('customer', {
        url: '/customer',
        params: {
          userID: 'undefined',
          userName: 'undefined'
        },
        templateUrl: 'app/customer/customer.html',
        controller: 'CustomerCtrl',
        controllerAs: 'cust'

      });
  });
