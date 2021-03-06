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
var model = require ('../../models/db/dataModel');
exports.index = function(req, res) {

  var fecha = req.query.date;
  var parametros = req.query.params;

  model.getStations(fecha,parametros,function(err,response){
    if(err === null){
      res.send(response);
    }
    else{
      res.send(err);
    }
  });
};

exports.params = function(req, res) {

  model.getParams(function(err,response){
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
