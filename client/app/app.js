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
  'mwl.calendar'
])
  .config(function($urlRouterProvider, $locationProvider, calendarConfig) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    calendarConfig.displayAllMonthEvents = true;
  });
