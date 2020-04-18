const express = require('express');
const controllerAuth = require('../controllers/auth'); 
const rAuth = express.Router();

rAuth.post('/login', controllerAuth.login);
rAuth.post('/register', controllerAuth.register);

module.exports = rAuth;

