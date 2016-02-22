'use strict';
(function(){

  class ManageClientsCtrl{


      constructor(User) {
        // Use the User $resource to fetch all users
        //console.log('called');
        console.log('IN the new constructor');
        this.alldata = User.query();
        console.log(this.alldata);
      }

      delete(user) {
        user.$remove();
        this.alldata.splice(this.alldata.indexOf(user), 1);
      }

  }
  angular.module('essenceEventsRepoApp.admin')
    .controller('ManageClientsCtrl', ManageClientsCtrl);


})();
