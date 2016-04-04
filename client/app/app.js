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
  'mwl.calendar',
  'uiGmapgoogle-maps'
])
  .config(function($urlRouterProvider, $locationProvider, calendarConfig) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    calendarConfig.displayAllMonthEvents = true;
  })
.filter('phone', function() {
  return function(number) {
    if (!number)
      return '----';
    else if (number.length == 7)
      return (number.substring(0,3) + '-' + number.substring(3,7));
    else if (number.length == 10)
      return ('(' + number.substring(0,3) + ') ' + number.substring(3,6) + '-' + number.substring(6,10));
    else
      return number;
  };
});
