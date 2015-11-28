/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var model = require ('../../models/mail/mailService');
exports.create = function(req, res) {

  var fecha = req.body.date;
  var message = req.body.message;

  var mail= req.body.mail;
  var name = req.body.name;
  console.log(req.body.name);
  model.save(mail,name,message,function(err,response){
        if(err === null){
          res.send(response);
        }
        else{
          res.send(err);
        }
      });
};

function handleError(res, err) {
  return res.send(500, err);
}