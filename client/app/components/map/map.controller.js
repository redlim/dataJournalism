
(function () {
  'use strict';
  angular.module('anitaApp').directive('wiMap',function(){

    var mapService = function(){
      var map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([40.423852777777775, -3.7122472222222225]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        //.openPopup()s

    };

    var MapController = function ($scope, $location) {

      var map = L.map('map').setView([40.423852777777775, -3.6823194444444445], 13);

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      //Plaza de España

      L.marker([40.423852777777775, -3.7122472222222225]).addTo(map)
        .bindPopup('Plaza de España.<br> Urbana de tráfico')
        .openPopup();

      //Entre C/ Alcalá y C/ O’ Donell
      L.marker([40.42156388888888, -3.6823194444444445]).addTo(map)
        .bindPopup('Escuelas Aguirre.<br> Urbana de tráfico')
        .openPopup();

      //Avda. Ramón y Cajal  esq. C/ Príncipe de Vergara
      L.marker([40.45149166666667, -3.6773555555555553]).addTo(map)
        .bindPopup('Avda. Ramón y Cajal. <br> Urbana de tráfico')
        .openPopup();

      //C/ Arturo Soria  esq. C/  Vizconde de los Asilos
      L.marker([40.44004722222222, -3.6392333333333333]).addTo(map)
        .bindPopup('Arturo Soria.<br> Urbana de fondo')
        .openPopup();

      //C/. Juan Peñalver
      L.marker([40.34701944444445, -3.713322222222222]).addTo(map)
        .bindPopup('Villaverde.<br> Urbana de fondo')
        .openPopup();

      //Calle Farolillo - C/Ervigio
      L.marker([40.394780555555556, -3.7318527777777777]).addTo(map)
        .bindPopup('Farolillo.<br> Urbana de fondo')
        .openPopup();

      //Casa de Campo  (Terminal del Teleférico)
      L.marker([40.419355555555555, -3.7473472222222224]).addTo(map)
        .bindPopup('Casa de campo.<br> Suburbana')
        .openPopup();

      //C/. Júpiter, 21 (Barajas)
      L.marker([40.47692777777778, -3.580030555555555]).addTo(map)
        .bindPopup('Barajas Pueblo.<br> Urbana de fondo')
        .openPopup();

      //Plaza del Carmen esq. Tres Cruces.
      L.marker([40.41921388888888, -3.7031722222222223]).addTo(map)
        .bindPopup('Plaza del Carmen.<br> Urbana de fondo')
        .openPopup();

      //Avd. Moratalaz  esq. Camino de los Vinateros
      L.marker([40.40794722222222, -3.6453055555555554]).addTo(map)
        .bindPopup('Moratalaz.<br> Urbana de tráfico')
        .openPopup();

      //Avda. Pablo Iglesias esq. C/ Marqués de Lema
      L.marker([40.445544444444444, -3.707127777777778]).addTo(map)
        .bindPopup('Cuatro Caminos.<br> Urbana de tráfico')
        .openPopup();

      //Avd. Betanzos esq. C/  Monforte de Lemos
      L.marker([40.47822777777778, -3.7115416666666667]).addTo(map)
        .bindPopup('Barrio del Pilar.<br> Urbana de tráfico')
        .openPopup();

      //C/ Arroyo del Olivar  esq. C/  Río Grande.
      L.marker([40.388152777777776, -3.65152222222222237]).addTo(map)
        .bindPopup('Vallecas.<br> Urbana de Fondo')
        .openPopup();

      //C/ Juan de Mariana / Pza. Amanecer Mendez Alvaro
      L.marker([40.398113888888886, -3.6868250000000002]).addTo(map)
        .bindPopup('Mendez Álvaro.<br> Urbana de Fondo')
        .openPopup();

      //C/ Jose Gutierrez Abascal
      L.marker([40.43989722222222, -3.690366666666667]).addTo(map)
        .bindPopup('Castellana.<br> Urbana de Tráfico')
        .openPopup();

      //Paseo Venezuela- Casa de Vacas
      L.marker([40.41444444444444, -3.682583333333333]).addTo(map)
        .bindPopup('Parque del Retiro.<br> Urbana de fondo')
        .openPopup();

      //Plaza Castilla (Canal)
      L.marker([40.46557222222223, -3.6887694444444445]).addTo(map)
        .bindPopup('Plaza Castilla .<br> Urbana de tráfico')
        .openPopup();

      //Avda La Gavia / Avda. Las Suertes
      L.marker([40.372933333333336, -3.6121166666666666]).addTo(map)
        .bindPopup('Ensanche de Vallecas.<br> Urbana de fondo')
        .openPopup();

      //C/ Riaño (Barajas)
      L.marker([40.46253055555556, -3.580747222222222]).addTo(map)
        .bindPopup('Urb. Embajada.<br> Urbana de fondo')
        .openPopup();

      // Pza. Fernández Ladreda - Avda. Oporto
      L.marker([40.38496388888889, -3.718727777777778]).addTo(map)
        .bindPopup('Pza. Fernández Ladreda.<br> Urbana de tráfico')
        .openPopup();

      //C/ Princesa de Eboli esq C/ Maria Tudor
      L.marker([40.49420833333333, -3.660502777777778]).addTo(map)
        .bindPopup('Sanchinarro.<br> Urbana de fondo')
        .openPopup();

      //Avda. La Guardia
      L.marker([40.51805833333333, -3.774611111111111]).addTo(map)
        .bindPopup('El Pardo.<br> Suburbana')
        .openPopup();

      //Parque Juan Carlos I (frente oficinas mantenimiento)
      L.marker([40.465250000000005, -3.6090722222222222]).addTo(map)
        .bindPopup('Juan Carlos I.<br> Suburbana')
        .openPopup();

      //Plaza Tres Olivos
      L.marker([40.50058888888889, -3.6897611111111113]).addTo(map)
        .bindPopup('Tres Olivos.<br> Urbana de fondo')
        .openPopup();
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
