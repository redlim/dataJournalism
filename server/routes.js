/**
 * Main application routes
 */

'use strict';
var CronJob = require('cron').CronJob;
var errors = require('./components/errors');
var insertParams = require('./dataProvider/airDataProvider');
var data = require('./controller/dataController');
var main = require('./controller/mainController');
var fs = require('fs');
module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/stations',require('./api/environment'));
  app.use('/mail',require('./api/mail'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });

  new CronJob('0 5 * * * *', function() {
    main.run(function(err,res){
      if(err === null){
        fs.writeFile('logOk.log', res, function (error) {
          if (error) return console.log(error);
          console.log("yeah");
        });
      }else {
        console.log("error, que pasa?", err);
        fs.writeFile('logErr', err, function (error) {
          if (error) return console.log(error);
          console.log("error, que pasa?", error);
        });
      }
    });
  }, null, true, 'Europe/Madrid');

  //insertParams.insertStations(function(err,res){
  //
  //  console.log(err,res);
  //});
};
