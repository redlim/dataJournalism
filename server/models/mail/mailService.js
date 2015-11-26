var connection = require('../../mysqlConnection');
var moment = require('moment');

var mail = {};
var anitaDb = connection.connectionMysql();

mail.save = function(mail,content,text,callback){

 var query = "var insert into mails (name,content,mail) values ("+mail+","+content+","+text+")";

  anitaDb.query(query,function(err,res){
    if(err===null){
      callback(err,res);
    }else{
      callback("faltan parámetros :" +err,res);
    }
  });
};
module.exports = mail;
