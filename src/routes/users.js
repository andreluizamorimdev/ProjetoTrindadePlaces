const { Router } = require('express');
const validateNewUser = require('../middlewares/validate-new-user');
const createUser = require('../controllers/users/createUser');
const createLogin = require('../controllers/users/createLogin');

const usersRoutes = new Router();

//exercicio 2 da semana 10 - criar rota post de /users
usersRoutes.post('/users', validateNewUser, createUser);

//exercicio 3 da semana 10 - criar rota de sessão jwt
usersRoutes.post('/sessions', createLogin);

module.exports = usersRoutes;