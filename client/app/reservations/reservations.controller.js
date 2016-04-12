'use strict';

angular.module('essenceEventsRepoApp')
.controller('ReservationsCtrl', ['$scope', 'Auth', 'Email', '$state', function ($scope, Auth, Email, $state) {
  //Disallowing touch screens to drag helps phones scroll down the page easier
  var isDraggable = !('ontouchstart' in document.documentElement);

  //Setup email response messages
  $scope.emailSuccess = false;
  $scope.emailError = false;

  //Setup map properties
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

  //Setup email fields based on form and send it to backend where nodemailer sends message
  $scope.submit = function() {
    var email = {
      firstName: $scope.fname,
      lastName: $scope.lname,
      address: $scope.email,
      phone: $scope.phone,
      message: $scope.message
    };

    Email.contactUs(email)
    .then(function(response) {
      $state.reload();
      $scope.emailSuccess = true;
    }, function(error) {
      $scope.emailError = true;
    });
  }
}]);
