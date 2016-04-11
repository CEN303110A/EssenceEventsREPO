'use strict';

class LoginController {
  constructor(Auth, $state, Email, $modal) {
    this.user = {};
    this.submitted = false;
    this.errors = {};
    this.Auth = Auth;
    this.$state = $state;
    this.Email = Email;
    this.modalService = $modal;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        this.$state.go('main');
      })
      .catch(err => {
        this.errors.other = err.message;
      });
    }
  }

  openModal(){
    var vm = this;
    var email = this.user.email;
    var modalInstance = this.modalService.open({
      animation: true,
      templateUrl: 'app/account/login/resetModal/resetModal.html',
      controller: 'resetModalCtrl',
      resolve: {
        email: function() {
	  return email;
	},
	vm: function() {
	  return vm;
	}
      }
    });
  }

/*
  reset(form) {
    var vm = this;
    vm.errors.other = null;
    this.Email.resetPass(this.user.email)
      .then(function(response) {
	vm.success = 'New password sent';
      }, function(err) {
	vm.errors.other = 'Reset Failed!';
    });
  }
*/
}

angular.module('essenceEventsRepoApp')
  .controller('LoginController', LoginController);
