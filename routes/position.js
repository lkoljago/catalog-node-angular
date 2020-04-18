const express = require('express');
const controller = require('../controllers/position'); 
const r = express.Router();

r.get('/:cateforyId', controller.getByCategory);
r.post('/', controller.create);
r.delete('/:id', controller.remove);
r.patch('/:id', controller.update);

module.exports = r;

