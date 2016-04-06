'use strict';

angular.module('essenceEventsRepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('customer', {
        url: '/customer',
        params: {
          userID: 'undefined',
          userName: 'undefined',
          events: ['=']

        },
        templateUrl: 'app/customer/customer.html',
        controller: 'CustomerCtrl',
        controllerAs: 'cust',
        authenticate: 'user'

      });
  });
