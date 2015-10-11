'use strict';

angular.module('anitaApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Nuestro proyecto',
      'link': '/',
      'img' : 'assets/images/environment.png'
    },
      {
        'title': 'Nuestros blogs',
        'link': '/blog',
        'img' : 'assets/images/blogs.png'
      },
      {
        'title' : 'Quienes somos',
        'link' : '/about',
        'img' : 'assets/images/aboutUsIcon.png'
      }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });