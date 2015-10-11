'use strict';

angular.module('anitaApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.selectData = {
      repeatSelect: null,
      availableOptions: [
        {id: '1', name: 'CO'},
        {id: '2', name: 'PM10'},
        {id: '3', name: 'SO2'},
        {id:'4', name:'NO2'},
        {id:'5', name:'O3'}
      ],
      selectedOption : {id: '1', name: 'CO'}
    };

    $http.get('/data?tipo=co').success(function(data) {

      $scope.data = data;

    });
    $http.get('/data?tipo=pm10').success(function(data) {

      $scope.dataPM10 = data;

    });


    $scope.options = {width: 500, height: 300, 'bar': 'aaa'};
    $scope.data = [1, 2, 3, 4];
    $scope.hovered = function(d){
      $scope.barValue = d;
      $scope.$apply();
    };
    $scope.barValue = 'None';
  })
  .directive('barChart', function(){
    var chart = d3.custom.barChart();
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="chart"></div>',
      scope:{
        height: '=height',
        data: '=data',
        hovered: '&hovered'
      },
      link: function(scope, element, attrs) {
        var chartEl = d3.select(element[0]);
        chart.on('customHover', function(d, i){
          scope.hovered({args:d});
        });

        scope.$watch('data', function (newVal, oldVal) {
          chartEl.datum(newVal).call(chart);
        });

        scope.$watch('height', function(d, i){
          chartEl.call(chart.height(scope.height));
        })
      }
    }
  })
  .directive('chartForm', function(){
    return {
      restrict: 'E',
      replace: true,
      controller: function AppCtrl ($scope,$http) {

        $scope.update = function(d, i){
          var option = $scope.selectData.selectedOption.name;

          $http.get('/data?tipo='+option).success(function(data) {

          $scope.data = data;

        }); };
      },
      template: '<div class="form">' +
      'Height: {{options.height}}<br />' +
      '<input type="range" ng-model="options.height" min="100" max="800"/>' +
      '<br /><button ng-click="update()">Update Data</button>' +
      '<br />Hovered bar data: {{barValue}}</div>'
    }
  });