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

  console.log(req.query.tipo);
  model.getParametro("2015-10-07",req.query.tipo,function(err,response){
        if(err === null){

          console.log(response);
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