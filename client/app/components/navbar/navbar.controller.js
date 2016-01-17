(function () {
  'use strict';
  angular.module('anitaApp').directive('wiNavbar',function(){

    var NavBarController = function ($scope, $location) {
      this.menu = [{
        'title': 'El aire de Madrid',
        'link': '/',
        'img': '/assets/images/environment.png'
      },
        {
          'title': 'La contaminación y tu salud',
          'link': '#contamination',
          'img': '/assets/images/blogs.png'
        },
        {
          'title': 'Quienes somos',
          'link': '#about',
          'img': '/assets/images/aboutUsIcon.png'
        }];

      this.isCollapsed = true;

      this.isActive = function (route) {
        return route === $location.path();
      };

      ( function( window ) {

        'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

        function classReg( className ) {
          return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
        }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
        var hasClass, addClass, removeClass;

        if ( 'classList' in document.documentElement ) {
          hasClass = function( elem, c ) {
            return elem.classList.contains( c );
          };
          addClass = function( elem, c ) {
            elem.classList.add( c );
          };
          removeClass = function( elem, c ) {
            elem.classList.remove( c );
          };
        }
        else {
          hasClass = function( elem, c ) {
            return classReg( c ).test( elem.className );
          };
          addClass = function( elem, c ) {
            if ( !hasClass( elem, c ) ) {
              elem.className = elem.className + ' ' + c;
            }
          };
          removeClass = function( elem, c ) {
            elem.className = elem.className.replace( classReg( c ), ' ' );
          };
        }

        function toggleClass( elem, c ) {
          var fn = hasClass( elem, c ) ? removeClass : addClass;
          fn( elem, c );
        }

        var classie = {
          // full names
          hasClass: hasClass,
          addClass: addClass,
          removeClass: removeClass,
          toggleClass: toggleClass,
          // short names
          has: hasClass,
          add: addClass,
          remove: removeClass,
          toggle: toggleClass
        };

// transport
        if ( typeof define === 'function' && define.amd ) {
          // AMD
          define( classie );
        } else {
          // browser global
          window.classie = classie;
        }

      })( window );
      (function() {

        var docElem = document.documentElement,
          header = document.querySelector( '.navbar-default' ),
          didScroll = false,
          changeHeaderOn = 300;

        function init() {
          window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
              didScroll = true;
              setTimeout( scrollPage, 250 );
            }
          }, false );
        }

        function scrollPage() {
          var sy = scrollY();
          if ( sy >= changeHeaderOn ) {
            classie.add( header, 'navbar-shrink' );
          }
          else {
            classie.remove( header, 'navbar-shrink' );
          }
          didScroll = false;
        }

        function scrollY() {
          return window.pageYOffset || docElem.scrollTop;
        }

        init();

      })();

    };

    return{
      restrict : 'A',
      templateUrl : 'app/components/navbar/navbar.html',
      controller : NavBarController,
      controllerAs : 'navbarCtrl'
    };
  });

}());

