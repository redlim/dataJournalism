var data = require ('./dataController');
var dataModel = require('../models/db/dataModel');
var main = {};
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

module.exports = main;