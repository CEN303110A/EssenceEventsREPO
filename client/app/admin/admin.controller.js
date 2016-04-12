'use strict';

angular.module('essenceEventsRepoApp.admin')
  .controller('AdminController', ['$scope', function($scope)
  {

    $scope.Functions = [
      {
        'title': 'New Client',
        'description': 'Create an account for a new client',
        'state': 'admin.createAccount',
      },
      {
        'title': 'Manage Clients',
        'description': 'Manage existing clients',
        'state': 'admin.manageClients',
      },
      {
        'title': 'Manage Event(s)',
        'description': 'Manage an event for a existing client',
        'state': 'admin.manageEvent',
      },
      {
        'title': 'Create Contractor',
        'description': 'Create a contractor entry',
        'state': 'admin.createContractor',
      },
      {
        'title': 'Manage Contractors',
        'description': 'Manage existing contractors',
        'state': 'admin.manageContractors',
      },
      {
        'title': 'Manage Links',
        'description': 'Manage Public Links Page',
        'state': 'admin.manageLinks',
      }
    ];


  }]);
