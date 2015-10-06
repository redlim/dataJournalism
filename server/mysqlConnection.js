var config = require('./config/environment');
var mysql = require('mysql');

var connection = {};
connection.connectionMysql = function(){
  return mysql.createConnection(config.mysql.conf);
} ;


module.exports = connection;