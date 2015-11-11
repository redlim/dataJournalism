var connection = require('../../mysqlConnection');
var moment = require('moment');

var datos = {};
var anitaDb = connection.connectionMysql();


datos.insert = function(data,callback){

  var insertIntoData = "insert into datos (valor, esValido ,fecha,tecnica_id,estacion,parametro_id) values ";
  var size = data.length;
  var values = "";


  for (var i = 0; i < size;i++){
    row = data[i];
    var date = moment(row.anio+row.mes+row.dia,"YYYYMMDD");
    values += "("+ row.h1 +" , '" +row.v1+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h2 +" , '" +row.v2+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h3 +" , '" +row.v3+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h4 +" , '" +row.v4+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h5 +" , '" +row.v5+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h6 +" , '" +row.v6+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h7 +" , '" +row.v7+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h8 +" , '" +row.v8+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h9 +" , '" +row.v9+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h10 +" , '" +row.v10+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h11 +" , '" +row.v11+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h12 +" , '" +row.v12+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h13 +" , '" +row.v13+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h14 +" , '" +row.v14+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h15 +" , '" +row.v15+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h16 +" , '" +row.v16+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h17 +" , '" +row.v17+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h18 +" , '" +row.v18+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h19 +" , '" +row.v19+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h20 +" , '" +row.v20+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h21 +" , '" +row.v21+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h22 +" , '" +row.v22+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h23 +" , '" +row.v23+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"+
      "("+ row.h24 +" , '" +row.v24+ "', '"+date.add(1,'hours').format('YYYY-MM-DD HH:mm:ss')+"', " +
      "(select id from tecnicas where codigo = '"+row.tecnicanalitica+"')," +
      "(select id from estaciones where codigo ="+ row.estacion1 + row.estacion2 + row.estacion3 +" ), " +
      "(select id from parametros where codigo = "+row.parametros+")),"
  }

  values = values.substring(0, values.length-1);

  var query = insertIntoData + values;
  anitaDb.query(query,function(err,res){

    if(err===null){
      callback(err,res);
    }else{
      callback("error Insertar datos :"+ err,res);
    }

  });

};

datos.delete = function(date,callback){

  var query  = "delete from datos where date(fecha) = '" + date +"'";
  console.log(query);
  anitaDb.query(query,function(err,res){

    if(err===null){
      callback(err,res);
    }else{
      callback("error en el borrado de los datos :" +err,res);
    }
  });

};

datos.getParametro = function(date,param,callback){

  var query  = 'select valor,magnitud,abreviatura,unidad,fecha from datos d ' +
    'inner join parametros p on p.id = d.parametro_id ' +
    'inner join estaciones e on e.id = d.estacion ' +
    'where p.abreviatura = "'+param+'"' +
    'and date(d.fecha) = "'+date+'" ' +
    'order by e.id , d.fecha limit 24 ';
  anitaDb.query(query,function(err,res){

    if(err===null){
      callback(err,res);
    }else{
      callback("Error en la consulta de parámeros :" +err,res);
    }
  });

};

datos.getValoresEstaciones = function(fecha,callback){

  var query  = 'select d.fecha,d.valor,e.nombre,e.latitud,e.longitud, e.altitud,p.magnitud, p.abreviatura, p.unidad from datos d' +
    ' inner join estaciones e on d.estacion = e.id' +
    ' inner join parametros p on d.parametro_id = p.id' +
    ' where d.esValido="v" and date(d.fecha) = "'+fecha+'"';

  anitaDb.query(query,function(err,res){
    if(err===null){
      callback(err,res);
    }else{
      callback("Error en la consulta de parámeros :" +err,res);
    }
  });
};
module.exports = datos;