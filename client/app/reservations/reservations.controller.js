'use strict';

angular.module('essenceEventsRepoApp')
.controller('ReservationsCtrl', ['$scope', 'Auth', '$http', '$location', '$state', function ($scope, Auth, $http, $location, $state) {
  var isDraggable = !('ontouchstart' in document.documentElement);

  $scope.emailSuccess = false;
  $scope.emailError = false;

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
      firstName: $scope.fname,
      lastName: $scope.lname,
      address: $scope.email,
      phone: $scope.phone,
      message: $scope.message
    };

    $http.post('http://' + $location.host() + ':' + $location.port() +'/api/email', email)
    .then(function(response) {
      $state.reload();
      $scope.emailSuccess = true;
    }, function(error) {
      console.log(error);
      $scope.emailError = true;
    });
  }
}]);
