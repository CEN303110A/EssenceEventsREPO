'use strict';

class LoginController {
  constructor(Auth, $state, $http, $location) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
    this.$http = $http;
    this.$location = $location;
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
    this.$http.put('http://' + this.$location.host() + ':' + this.$location.port() + '/api/email', {email: this.user.email})
      .then(function(response) {
	console.log('hello');
      }, function(err) {
	console.log(err);
    });
  }
}

angular.module('essenceEventsRepoApp')
  .controller('LoginController', LoginController);
