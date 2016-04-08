'use strict';

angular.module('essenceEventsRepoApp')
  .controller('ReservationsCtrl', ['$scope', 'Auth', '$http', '$location', function ($scope, Auth, $http, $location) {
    var isDraggable = !('ontouchstart' in document.documentElement);

    $scope.message = 'Hello';
    $scope.map = { center: { latitude: 29.65253, longitude: -82.330276 }, zoom: 17, options: {draggable: isDraggable}};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id:0,
      coords: {
        latitude: 29.65253,
        longitude: -82.330276
      },
      options: {draggable: false}
    };

    $scope.submit = function() {
      var email = {
        something: 'thing',
	else: 'why'
      };
      $http.post('http://' + $location.host() + ':' + $location.port() + '/api/email', email)
        .then(function(response) {
	  //do something on success
	}, function(error) {
	  //do something else on error
      });
    }
  }]);
