const express = require('express');
const controller = require('../controllers/category'); 
const r = express.Router();

r.get('/login', controller.getAll);
r.get('/:id', controller.getById);
r.delete('/:id', controller.remove);
r.post('/', controller.create);
r.patch('/:id', controller.update);

module.exports = r;

