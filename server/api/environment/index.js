'use strict';

var express = require('express');
var controller = require('./environment.controller');

var router = express.Router();

router.get('/stations', controller.index);
router.get('/params',controller.params);
module.exports = router;
