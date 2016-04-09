'use strict';

class LoginController {
  constructor(Auth, $state, Email, $scope) {
    this.user = {};
    this.submitted = false;
    this.errors = {};
    this.Auth = Auth;
    this.$state = $state;
    this.Email = Email;
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
        this.errors = err.message;
      });
    }
  }

  reset(form) {
    this.Email.resetPass(this.user.email)
      .then(function(response) {
	this.success = 'New password sent';
      }, function(err) {
	this.errors = 'Reset Failed!';
    });
  }
}

angular.module('essenceEventsRepoApp')
  .controller('LoginController', LoginController);
