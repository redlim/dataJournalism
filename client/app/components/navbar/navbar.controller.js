(function () {
  'use strict';
  angular.module('anitaApp').directive('wiNavbar',function(){

    var NavBarController = function ($scope, $location) {
      this.menu = [{
        'title': 'Nuestro proyecto',
        'link': '/',
        'img': '/assets/images/environment.png'
      },
        {
          'title': 'Nuestros blogs',
          'link': '/blog',
          'img': '/assets/images/blogs.png'
        },
        {
          'title': 'Quienes somos',
          'link': '/about',
          'img': '/assets/images/aboutUsIcon.png'
        }];

      this.isCollapsed = true;

      this.isActive = function (route) {
        return route === $location.path();
      };
    };

    return{
      restrict : 'A',
      templateUrl : 'app/components/navbar/navbar.html',
      controller : NavBarController,
      controllerAs : 'navbarCtrl'
    };
  });

}());

