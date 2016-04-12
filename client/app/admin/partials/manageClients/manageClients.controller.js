'use strict';
(function(){

  class ManageClientsCtrl{

      //pass dependencies through constructor
      constructor(User, $modal, $scope, $state) {
        // Use the User $resource to fetch all users
        this.alldata = User.query();
	      this.modalService = $modal;
      }

      //Open Manage Clients Modal to manage client information and create events for a client
      openModal(user){
        // console.log(user);
        var modalInstance = this.modalService.open({
          animation: true,
          templateUrl: 'app/admin/partials/manageClients/manageClientsModal/manageClientsModal.html',
          controller: 'ManageClientsModalCtrl',
          resolve: {
            user: function()
            {
              return user;
            }
          }
        });
      }

      //Delete user from database
      delete(user) {
        user.$remove();
        this.alldata.splice(this.alldata.indexOf(user), 1);
      }
  }
  angular.module('essenceEventsRepoApp.admin')
    .controller('ManageClientsCtrl', ManageClientsCtrl);

})();
