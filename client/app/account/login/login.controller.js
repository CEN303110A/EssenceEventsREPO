'use strict';

class LoginController {
  constructor(Auth, $state, Email) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

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
        this.errors.other = err.message;
      });
    }
  }

  reset(form) {
    this.Email.resetPass(this.user.email)
      .then(function(response) {
	console.log('hello');
      }, function(err) {
	console.log(err);
    });
  }
}

angular.module('essenceEventsRepoApp')
  .controller('LoginController', LoginController);
