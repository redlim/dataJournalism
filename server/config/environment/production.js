'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,


  // mariaDb connection options
  mysql : {
    conf:{
      host     : '127.0.0.1',
      port     : '3306',
      user     : 'ddatosco',
      password : 'hdesar$:22.',
      database : 'ddatosco_anita'
    }
  }
};