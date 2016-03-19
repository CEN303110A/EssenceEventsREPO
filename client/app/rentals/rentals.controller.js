'use strict';

angular.module('essenceEventsRepoApp')
  .controller('RentalsCtrl', function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    var slideItems = [
            {
                image: "assets/images/rentals/dresses.jpg",
                text: "Dresses"
            },
            {
                image: "assets/images/rentals/chairs.jpg",
                text: "Chairs"
            },
            {
                image: "assets/images/rentals/cloths.jpg",
                text: "Cloths"
            },
            {
                image: "assets/images/rentals/decorations.jpg",
                text: "Decorations"
            }
    ];

    var texts = []
    $scope.addSlide = function(i) {
      slides.push({
        image: slideItems[i].image,
        text: slideItems[i].text
      });
    };
    for (var i=0; i<slideItems.length; i++) {
      $scope.addSlide(i);
    }
  });
