'use strict';

angular.module('essenceEventsRepoApp.auth', [
  'essenceEventsRepoApp.constants',
  'essenceEventsRepoApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
