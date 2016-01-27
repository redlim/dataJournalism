(function () {
  'use strict';
  angular.module('anitaApp').directive('wiMap', wiMapDirective);


  function wiMapDirective() {

    return {
      restrict: 'A',
      templateUrl: 'app/components/map/map.html',
      controller: ['$scope', '$location', '$http', 'MapService', MapController],
      controllerAs: 'MapCtrl'
      //link : mapService
    };

    function MapController($scope, $location, $http, MapService) {

      $scope.params = {abreviatura: 'CO', magnitud: 'Monóxido de carbono', descripcion:'El monóxido de carbono es muy malo'};



      //inicializarMapa
      var map = L.map('map').setView([40.423852777777775, -3.6823194444444445], 11);
      map.scrollWheelZoom.disable();
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      // determinar iconos :
      var dangerIcon = L.icon({
        iconUrl: '/assets/images/icons/DangerIcon.png',
        iconSize: [30, 30]
      });

      var admissibleIcon = L.icon({
        iconUrl: '/assets/images/icons/admissibleIcon.png',
        iconSize: [30, 30]
      });

      var deficientIcon = L.icon({
        iconUrl: '/assets/images/icons/deficientIcon.png',
        iconSize: [30, 30]
      });

      var goodIcon = L.icon({
        iconUrl: '/assets/images/icons/GoodIcon.png',
        iconSize: [30, 30]
      });

      var withOutLimit = L.icon({
        iconUrl: '/assets/images/icons/limitUnknown.png',
        iconSize: [30, 30]
      });
      var markers = new L.FeatureGroup();
      putStationsIntoMap($scope.params.abreviatura);
      initializeParams();
      $scope.updateMap = function (param) {
        map.removeLayer(markers);
        putStationsIntoMap(param);
      };

      function putStationsIntoMap(params) {
        markers = new L.FeatureGroup();
        MapService.getDataStations(params).then(function successCallback(response) {
          var station = "";
          var lastStation = "";
          response.data.forEach(function (d) {

            station = d.estacion;
            var dangerLimit = d.limite_e_peligro;
            var admisibleLimit = d.limite_e_admisible;
            var goodLimit = d.limite_e_bueno;
            if (d.latitud != null || d.longitud != null && (lastStation !== station)
            && (station !== ' RED.- Media de todas las estaciones')) {

              if (dangerLimit != null) {

                var value = d.valor;
                var theIcon;
                switch (true) {
                  case (value < goodLimit) :
                    theIcon = goodIcon;
                    break;
                  case(goodLimit < value < admisibleLimit) :
                    theIcon = admissibleIcon;
                    break;
                  case (admisibleLimit < value < dangerLimit ) :
                    theIcon = deficientIcon;
                    break;
                  case( value > dangerLimit) :
                    theIcon = dangerIcon;
                    break;
                  default:
                    theIcon = dangerIcon;
                }
              }
              else {
                theIcon = withOutLimit;
              }
              var marker = L.marker([d.latitud, d.longitud], {icon: theIcon})
                .bindPopup('<div><p>' + station + '</p>' +
                  '<p>Valor: ' + value + '</p>' +
                  '<p>Limite Peligro: ' + dangerLimit + '</p>' +
                  '<p>Limite admisible: ' + admisibleLimit + '</p>' +
                  '<p>Limite bueno: ' + goodLimit + '</p>' +
                  '<p>Abreviatura: ' + d.abreviatura + '</p>' +
                  '</div>')
                .openPopup();
              lastStation = station;
              markers.addLayer(marker);
            }

          });

          map.addLayer(markers);

        }, function errorCallback(response) {
          //luego tratamos estas cosicas
        });
      }

      function initializeParams() {
        MapService.getParams().then(function (data) {
          $scope.paramsOptions = data.data;
        })
      }

    }


  }


}());
