
(function () {
  'use strict';
  angular.module('anitaApp').directive('wiMap',function(){

    var mapService = function(){
      var map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup()

    };

    var MapController = function ($scope, $location) {

      var map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([55.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup()


    };

    return{
      restrict : 'A',
      templateUrl : 'app/components/map/map.html',
      controller : MapController,
      controllerAs : 'MapCtrl'
      //link : mapService
    };
  });

}());
