var data = require ('./dataController');
var dataModel = require('../models/db/dataModel');
var main = {};


function parserDataYear(data){

  var result = "estacion,Parámetro,Ténica analítica,Periodo de análisis,año,mes \n";
  var lines=data.split("\n");
  var size = lines.length-1;
  for(var i=0;i<size;i++) {

    var currentline = lines[i];
    currentline = currentline.replace(/V/g, "V,");
    currentline = currentline.replace(/N/g, "N,");
    var estation = currentline.substring(0,8);

    //28079004 01 38 04 15 01
    console.log(estation);
    var parametro = currentline.substring(8,10);
    console.log(parametro);
    var tecnicaAnalitica = currentline.substring(10,12);
    console.log(tecnicaAnalitica);
    var periodoAnalisis = currentline.substring(12,14);
    console.log(periodoAnalisis);
    var anio = currentline.substring(14,16);
    console.log(anio);
    var mes = currentline.substring(16,18);
    console.log(mes);
    currentline = currentline.substring(18);

   result += estation + "," + parametro + "," + tecnicaAnalitica + "," + periodoAnalisis + "," + anio + "," + mes + "," + currentline;
  }
  fs = require('fs');
  fs.writeFile('calidad2012.csv', result, function (err) {
    if (err) return console.log(err);
    console.log("yeah");
  });

};

function parserData(data){

  var lines=data.split("\n");

  var result = [];

  var names = 'estacion1,estacion2,estacion3,parametros,tecnicanalitica,periodoanalisis,anio,mes,dia' +
    ',h1,v1,h2,v2,h3,v3,h4,v4,h5,v5,h6,v6,h7,v7,h8,v8,h9,v9,h10,v10,h11,v11,' +
    'h12,v12,h13,v13,h14,v14,h15,v15,h16,v16,h17,v17,h18,v18,h19,v19,h20,v20,h21,v21,' +
    'h22,v22,h23,v23,h24,v24';
  var headers=names.split(",");

  for(var i=0;i<lines.length-1;i++){

    var obj = {};
    var currentline=lines[i].split(",");

    for(var j=0;j<headers.length;j++){
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);

  }

  return result;//JSON

}

main.run= function(callback){

  data.getDataHourly(function(err,res){

    if(err === null){

      data = parserData(res);
      var date = data[0].anio +"-"+ data[0].mes +"-"+ data[0].dia;

      dataModel.delete(date,function(err,res){
        if(err===null) {
          dataModel.insert(data,function(err,res){
            if(err===null){
              callback(err,res);
            }else{
              callback("error la llamada a inserccion :"+err,res)
            }
          })
        }else{
          callback(err,res);
        }

      });



  }else{

      callback(err,res);
    }
});

};


main.getDataYear = function(callback){

  data.getDataYear(function(err,res) {

    if (err === null) {

      parserDataYear(res);

      callback(null,"yeah");
    }
    else {

      callback("fatal!","")
    }
  });

};
module.exports = main;