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
  app.use('/data',require('./api/environment'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });

  new CronJob('0 5,10,15,20,25,30,35,40,45,50,55 * * * *', function() {
    main.run(function(err,res){
      if(err === null){
        fs.writeFile('logOk.log', res, function (error) {
          if (error) return console.log(error);
          console.log("yeah");
        });
      }else {
        fs.writeFile('logErr', err, function (error) {
          if (error) return console.log(error);
          console.log("yeah");
        });
      }
    });
  }, null, true, 'Europe/Madrid');

  //insertParams.insertStations(function(err,res){
  //
  //  console.log(err,res);
  //});
};
