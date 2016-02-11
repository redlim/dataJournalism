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
      host     : 'anitaapp-761.mysql.dbs.appsdeck.eu',
      port     : '30845',
      user     : 'anitadb',
      password : 'anitadbpass',
      database : 'anitaapp_761',
      connectionLimit :10
    }
  }
};
