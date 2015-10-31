var request = require('request');

var data = {};
data.getDataHourly = function(callback){

  request('http://www.mambiente.munimadrid.es/opendata/horario.txt', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(null,body);
    }
    else{
      callback(error,response);
    }
  });
};
data.getDataYear = function(callback){

  var url = "http://datos.madrid.es/datosabiertos/MANUAL/201410/datos12.txt";

  request(url,function(error,response,body){
    if (!error && response.statusCode == 200) {

      callback(null,body);
    }
    else{
      callback(err,response);
    }
  });


};

module.exports = data;