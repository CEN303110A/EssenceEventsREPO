'use strict';

angular.module('essenceEventsRepoApp', [
  'essenceEventsRepoApp.auth',
  'essenceEventsRepoApp.admin',
  'essenceEventsRepoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'nvd3',
  'uiGmapgoogle-maps'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
