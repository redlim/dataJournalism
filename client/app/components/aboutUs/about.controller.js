(function () {
  'use strict';
  angular.module('anitaApp').directive('wiAbout',function(){


    return{
      restrict : 'A',
      templateUrl : 'app/components/aboutUs/about.html'
    };
  });

}());
