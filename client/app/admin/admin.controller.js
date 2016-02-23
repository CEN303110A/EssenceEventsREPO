'use strict';

(function() {

class AdminController {

  Functions = [
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
      'title': 'Create Event',
      'description': 'Create an event for a existing client',
      'state': 'admin.createEvent',
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
    }
  ];

  $scope.initScope = function()
  {
    console.log('here!');
    $state.go('admin.createAccount');
  }
/*
constructor(User) {
  // Use the User $resource to fetch all users
  console.log('called');

  this.users = User.query();
}

delete(user) {
  user.$remove();
  this.users.splice(this.users.indexOf(user), 1);
}
}
*/
}

angular.module('essenceEventsRepoApp.admin')
  .controller('AdminController', AdminController);

})();
