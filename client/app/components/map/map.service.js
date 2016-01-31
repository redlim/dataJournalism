(function () {
  'use strict';
  angular
    .module('anitaApp').factory('MapService',mapService);

  mapService.$inject = ['$http'];

  function mapService($http) {

    var mapService = {};
    mapService.params = "";

    mapService.getDataStations = function (params) {
     return  $http({
        method: 'GET',
        url: '/data/stations',
        params: {
          'date': moment().subtract(6, 'h').format('YYYY-MM-DD HH:mm'),
          'params': params
        }
      }).then(function(data){
       return mapService.params = data;
     });
    };

    mapService.getParams = function(){
      return  $http({
        method: 'GET',
        url: '/data/params'
      });
    };
    return mapService;
  }
})();
