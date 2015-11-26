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
exports.index = function(req, res) {

  var fecha = req.query.date;
  var content = req.query.content;
  var mail= req.query.mail;
  var name = req.query.name;

  model.save(content,mail,name,function(err,response){
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