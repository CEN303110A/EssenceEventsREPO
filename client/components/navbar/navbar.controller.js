'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
      'title': 'Home',
      'state': 'main',
      'hasDropDown' : false
    },
    {
      'title': 'Services',
      'state': '',
      'hasDropDown' : true,
      'sublinks' : [
        {
          'title': 'Plans',
          'state': 'services'
        },
        {
          'title': 'Rentals',
          'state': 'rentals'
        }
      ]
    },
    {
      'title': 'Testimonials',
      'state': '',
      'hasDropDown' : true,
      'sublinks' : [
        {
          'title': 'Celebrations',
          'state': 'celebrations'
        },
        {
          'title': 'Corporate',
          'state': 'corporate'
        },
        {
          'title': 'Weddings',
          'state': 'weddings'
        }
      ]
    },
    {
      'title': 'Reservations',
      'state': 'reservations',
      'hasDropDown' : false
    },
    {
      'title': 'Links',
      'state': 'links',
      'hasDropDown' : false
    },
    {
      'title': 'About Us',
      'state': 'aboutus',
      'hasDropDown' : false
    }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('essenceEventsRepoApp')
  .controller('NavbarController', NavbarController);
