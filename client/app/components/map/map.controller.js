(function () {
  'use strict';
  angular.module('anitaApp').directive('wiMap', wiMapDirective);


  function wiMapDirective() {

    return {
      restrict: 'A',
      templateUrl: 'app/components/map/map.html',
      controller: ['$scope', 'MapService', MapController],
      controllerAs: 'MapCtrl'
      //link : mapService
    };

    function MapController($scope, MapService) {

      $scope.params = {abreviatura: 'CO', magnitud: 'Monóxido de carbono', descripcion:'El monóxido de carbono es muy malo'};

      $scope.estacion = MapService.getStation();

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
        MapService.setStation(' RED.- Media de todas las estaciones');
        putStationsIntoMap(param);
      };

      function putStationsIntoMap(params) {
        markers = new L.FeatureGroup();
        MapService.getDataStations(params).then(function successCallback(response) {
          // dibujamos gráfica media estaciones
          var dataDraw = parseParameterData(MapService.params.data,MapService.getStation());
          drawParameter(dataDraw);
          $scope.estacion = MapService.getStation();
          var station = "";
          var lastStation = "";
          response.data.forEach(function (d) {

            station = d.estacion;
            var dangerLimit = d.limite_e_peligro;
            var admisibleLimit = d.limite_e_admisible;
            var goodLimit = d.limite_e_bueno;
            var unit = d.unidad;
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
              var marker = L.marker([d.latitud, d.longitud], {icon: theIcon,name:station})
                .bindPopup('<div><p>' + station + '</p>' +
                  '<p>Valor: ' + value +' '+unit+ '</p>' +
                  '<p>Limite Peligro: ' + dangerLimit + '</p>' +
                  '<p>Limite admisible: ' + admisibleLimit + '</p>' +
                  '<p>Limite bueno: ' + goodLimit + '</p>' +
                  '<p>Abreviatura: ' + d.abreviatura + '</p>' +
                  '</div>')
                .openPopup().on('click',markerClick);
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
        });
      }

      function markerClick(e){

        var data = parseParameterData(MapService.params.data, this.options.name);
        drawParameter(data);
        MapService.setStation(this.options.name);
        $scope.$apply(function () {
          $scope.estacion = MapService.getStation();
        });
      }

      function  parseParameterData(data,element){

        var newData = [];

        data.forEach(function(d){
          if(d.estacion === element)
          newData.push({'fecha':d.fecha ,'valor': d.valor})
        });

        return newData;
      }

      var  drawParameter = function(data){


        // Set the dimensions of the canvas / graph
        var margin = {top: 30, right: 50, bottom: 30, left: 30},
          width = 600 - margin.left - margin.right,
          height = 270 - margin.top - margin.bottom;

        var parseDate = d3.time.format("%d %m %Y %X").parse;
        var bisectDate = d3.bisector(function(d) { return d.fecha; }).left;
        var formatDate = d3.time.format("%X");

        // Set the ranges
        var x = d3.time.scale().range([0, width]);
        var y = d3.scale.linear().range([height, 0]);

        // Define the axes
        var xAxis = d3.svg.axis().scale(x)
          .orient("bottom").ticks(5);

        var yAxis = d3.svg.axis().scale(y)
          .orient("left").ticks(10);

        // Define the line
        var valueline = d3.svg.line()
          .x(function(d) { return x(d.fecha); })
          .y(function(d) { return y(d.valor); });

        var svg = d3.select("#graph")
          .append('svg')
          .attr("width", width + margin.left + margin.right)
          .attr("height",height + margin.top + margin.bottom)
          .append("g")
          .attr("transform","translate(" + margin.left +"," + margin.top+")");

        var lineSvg = svg.append("g");
        var focus = svg.append("g")
          .style("dysplay","none");


          data.forEach(function(d){
            d.fecha = parseDate(d.fecha);
            d.valor = +d.valor;
          });

          x.domain(d3.extent(data, function(d) { return d.fecha; }));
          y.domain([0, d3.max(data, function(d) { return d.valor; })]);

          lineSvg.append("path")
            .attr("class","line")
            .attr("d",valueline(data));

          //eje x
          svg.append("g")
            .attr("class", "x axis")
            .attr("transform","translate(0,"+height + ")")
            .call(xAxis);

          //eje Y
          svg.append("g")
            .attr("class","x axis")
            .call(yAxis);

          // la línea x
          focus.append("line")
            .attr("class", "x")
            .style("stroke","blue")
            .style("stroke-dasharay","3,3")
            .style("opacity",0.5)
            .attr("y1",0)
            .attr("y2",height);

        //línea y
        focus.append("line")
          .attr("class","y")
          .style("stroke","blue")
          .style("stroke-dasharay","3,3")
          .style("opacity",0.5)
          .attr("x1",width)
          .attr("x2",width);


          focus.append("circle")
            .attr("class","y")
            .style("fill","none")
            .style("stroke","blue")
            .attr("r",4);

        // Valor en la intersección
        focus.append("text")
          .attr("class","y1")
          .style("stroke", "white")
          .style("stroke-width","3.5px")
          .style("opacity",0.8)
          .attr("dx",8)
          .attr("dy","-.3em");
        focus.append("text")
          .attr("class","y2")
          .attr("dx",8)
          .attr("dy","-.3em");

        // fecha en la inteseccion

        focus.append("text")
          .attr("class", "y3")
          .style("stroke", "white")
          .style("stroke-width", "3.5px")
          .style("opacity", 0.8)
          .attr("dx", 8)
          .attr("dy", "1em");
        focus.append("text")
          .attr("class", "y4")
          .attr("dx", 8)
          .attr("dy", "1em");

        // el rectangulo que captura la posición del ratón!
          svg.append("rect")
            .attr("width",width)
            .attr("height",height)
            .style("fill","none")
            .style("pointer-events","all")
            .on("mouseover",function(){focus.style("display",null)})
            .on("mouseout",function(){focus.style("display","none")})
            .on("mousemove",mousemove);

          function mousemove(){
            var x0 = x.invert(d3.mouse(this)[0]),
              i = bisectDate(data, x0, 1),
              d0 = data[i - 1],
              d1 = data[i],
              d = x0 - d0.fecha > d1.fecha - x0 ? d1 : d0;

            focus.select("circle.y")
              .attr("transform","translate(" + x(d.fecha) + "," + y(d.valor) + ")");

            focus.select("text.y1")
              .attr("transform","translate(" + x(d.fecha) + "," + y(d.valor) + ")")
              .text(d.valor);

            focus.select("text.y1")
              .attr("transform","translate(" + x(d.fecha) + "," + y(d.valor) + ")")
              .text(d.valor);
            focus.select("text.y2")
              .attr("transform","translate(" + x(d.fecha) + "," + y(d.valor) + ")")
              .text(d.valor);

            focus.select("text.y3")
              .attr("transform","translate(" + x(d.fecha) + "," + y(d.valor) + ")")
              .text(formatDate(d.fecha));

            focus.select("text.y4")
              .attr("transform","translate(" + x(d.fecha) + "," + y(d.valor) + ")")
              .text(formatDate(d.fecha));

            focus.select(".x")
              .attr("transform","translate(" + x(d.fecha) + "," + y(d.valor) + ")")
              .attr("y2", height - y(d.valor));

            focus.select(".y")
              .attr("transform",
                "translate(" + width * -1 + "," +
                y(d.valor) + ")")
              .attr("x2", width + width);
          }
      }
    }


  }


}());
