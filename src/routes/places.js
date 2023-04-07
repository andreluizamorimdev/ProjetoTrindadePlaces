const { Router } = require('express');

const validateAuthToken = require('../middlewares/validate-auth-token');
const validateNewPlace = require('../middlewares/validate-new-places');

const createPlace = require('../controllers/places/createPlace');
const findPlaces = require('../controllers/places/findPlaces');
const deletePlace = require('../controllers/places/deletePlace');
const updatePlace = require('../controllers/places/updatePlace');

const placesRoutes = new Router()

//exercicio 3 semana rota post criada
placesRoutes.post('/places',validateAuthToken, validateNewPlace, createPlace);


//exercicio 4 rota Get criada
placesRoutes.get('/places',validateAuthToken, findPlaces);

//exercicio 5 rota delete criada 
placesRoutes.delete('/places/:id',validateAuthToken, deletePlace);

//exercicio 6 rota update criada
placesRoutes.put('/places/:id', validateAuthToken, updatePlace);

module.exports = placesRoutes;