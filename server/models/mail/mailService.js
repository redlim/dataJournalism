var connection = require('../../mysqlConnection');
var moment = require('moment');

var mail = {};
var anitaDb = connection.connectionMysql();

mail.save = function(mail,name,text,callback){

 var query = "insert into mails (name,content,mail) values ('"+name+"','"+text+"','"+mail+"')";

  anitaDb.query(query,function(err,res){
    if(err===null){
      callback(err,res);
    }else{
      callback("faltan parámetros :" +err,res);
    }
  });
};
module.exports = mail;
