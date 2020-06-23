const express = require('express');

const PatientsController = require('./controllers/PatientsController');
const AuthController = require('./controllers/AuthController');
const SymptomsController = require('./controllers/SymptomsController');

const routes = express.Router();


routes.get('/symptoms', SymptomsController.list);

routes.get('/patients', PatientsController.list);
routes.post('/patients', PatientsController.create);
routes.get('/patients/:id', PatientsController.get);
routes.put('/patients/:id', PatientsController.update);

routes.post('/login', AuthController.authenticate);
routes.post('/users', AuthController.create);


module.exports = routes