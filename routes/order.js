const express = require('express');
const controller = require('../controllers/order'); 
const r = express.Router();

r.post('/login', controller.login);

r.post('/register', controller.register);

module.exports = r;

