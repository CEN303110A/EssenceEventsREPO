'use strict';

angular.module('essenceEventsRepoApp')
.controller('LinksCtrl', ['$scope', 'Links', function ($scope, Links) {
  // $scope.message = 'Hello';
  $scope.getLinks = function()
  {
    console.log('HERE');
    Links.getAll()
    .then(function(response) {

      //get the links
      var allLinks = response.data;
      console.log(allLinks);

      //split them into their appropriate categories
      var display = [];

      for(var i = 0; i < allLinks.length; i++)
      {
        var exists = false;
        for(var j = 0; j < display.length; j++)
        {

          console.log(display[j].type);
          console.log((allLinks[i].type).toLowerCase());


          if(display[j].type == (allLinks[i].type).toLowerCase())
          {
            exists = true;
            display[j].links.push(
              {
                name: allLinks[i].name,
                url: allLinks[i].url,
                phoneNumber: allLinks[i].phoneNumber,
                photo: allLinks[i].photo
              }
            );
            break;
          }
        }

        if(!exists)
        {
          display.push(
            {
              type: allLinks[i].type.toLowerCase(),
              links: [
                {
                  name: allLinks[i].name,
                  url: allLinks[i].url,
                  phoneNumber: allLinks[i].phoneNumber,
                  photo: allLinks[i].photo
                }
              ],
            }
          );
        }
      }


      $scope.processedLinks = display;


    }, function(err) {
      //do something
    });
  }




}]);
