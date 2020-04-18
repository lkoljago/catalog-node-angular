const express = require('express');
const controller = require('../controllers/analitics'); 
const r = express.Router();

r.get('/overview', controller.overview);

r.get('/analitics', controller.analitics);

module.exports = r;

