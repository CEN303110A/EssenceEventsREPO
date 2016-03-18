'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('customer', {
        url: '/customer',
        templateUrl: 'app/customer/customer.html',
        controller: 'CustomerCtrl',
        controllerAs: 'cust'

      });
  });
