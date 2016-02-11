var config = require('./config/environment');
var mysql = require('mysql');

var connection = {};
connection.connectionMysql = function(){
  return mysql.createPool(config.mysql.conf);
} ;


module.exports = connection;
