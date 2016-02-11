'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // mariaDb connection options
  mysql : {
    conf:{
      host     : 'localhost',
      user     : 'root',
      password : 'bridget',
      database : 'anitaapp_761',
      connectionLimit :10
    }
  }
};
