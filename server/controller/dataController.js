var request = require('request');

var data = {};
data.getDataHourly = function(callback){

  request('http://www.mambiente.munimadrid.es/opendata/horario.txt', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(null,body);
    }
    else{
      callback(err,response);
    }
  });
};

module.exports = data;