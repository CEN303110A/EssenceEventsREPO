'use strict';

angular.module('essenceEventsRepoApp')
  .directive('adminContent', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the adminContent directive');
      }
    };
  });
