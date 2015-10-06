'use strict';

angular.module('anitaApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      console.log(awesomeThings);
      $scope.awesomeThings = [awesomeThings];
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  })
  .directive('myGraphs', function() {
    return {
      templateUrl: 'my-customer.html'
    };
  });
