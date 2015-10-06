var helpers = require('./helpers');
var connection = require('../mysqlConnection');
var fs = require('fs');

var modules = {};

//modules.insertParameters = function(callback){
//
//  var insertParamsQuery = "insert into parametros (codigo, magnitud , abreviatura , unidad ) values ";
//  var insertRows = '';
//
//  fs.readFile('./server/dataDocuments/params.csv', 'utf8', function (err,data) {
//    if (err) {
//      return console.log(err);
//    }
//
//    var newRows = helpers.csv2json(data);
//
//    var size = newRows.length;
//    console.log(newRows);
//    for (var j  = 0; j< size; j++){
//      var row = newRows[j];
//
//      insertRows += "('"+ row.codigo  + "', '"+row.parametro +  "','"+row.abreviatura +  "','"+row.unidad +  "'),";
//    }
//    insertRows = insertRows.substring(0, insertRows.length-1);
//    insertParamsQuery += insertRows;
//
//    var anitaDb = connection.connectionMysql();
//    anitaDb.query(insertParamsQuery,function(err, result){
//      if (err)
//        return callback(err,result);
//      else callback(err,result);
//    });
//
//
//  });
//
//};
modules.insertStations = function(callback){

  var insertParamsQuery = "insert into estaciones (codigo, nombre , comentario) values ";
  var insertRows = '';

  fs.readFile('./server/dataDocuments/stations.csv', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    var newRows = helpers.csv2json(data);

    var size = newRows.length;
    console.log(newRows);
    for (var j  = 0; j< size; j++){
      var row = newRows[j];

      insertRows += "("+ row.codigo  + ", '"+row.nombre +  "','"+row.comentario +  "'),";
    }
    insertRows = insertRows.substring(0, insertRows.length-1);
    insertParamsQuery += insertRows;

    var anitaDb = connection.connectionMysql();
    anitaDb.query(insertParamsQuery,function(err, result){
      if (err)
        return callback(err,result);
      else callback(err,result);
    });


  });
};

module.exports = modules;