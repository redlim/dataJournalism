(function () {
  'use strict';
  angular.module('anitaApp').directive('wiHeader',function(){


    return{
      restrict : 'A',
      templateUrl : 'app/components/header/header.html'
    };
  });

}());