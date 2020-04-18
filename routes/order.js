const express = require('express');
const controller = require('../controllers/order'); 
const r = express.Router();

r.get('/', controller.getAll);

r.post('/register', controller.create);

module.exports = r;

