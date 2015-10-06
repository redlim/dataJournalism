'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://<will>:<nvjnsaos>@ds027799.mongolab.com:27799/anitadb'
  },
  // mariaDb connection options
  mysql : {
    conf:{
      host     : 'localhost',
      user     : 'root',
      password : 'bridget',
      database : 'anita'
    }
  }
};