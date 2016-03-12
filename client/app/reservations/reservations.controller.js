'use strict';

angular.module('essenceEventsRepoApp')
  .controller('ReservationsCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.map = { center: { latitude: 29.65253, longitude: -82.330276 }, zoom: 17 };
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
  });
