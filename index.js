//Adicionado exercicio 5 utilizando variaveis de ambiente e organização do projeto
require('dotenv').config();

const express = require('express');

const connection = require('./src/database');

const placesRoutes = require('./src/routes/places');
const usersRoutes = require('./src/routes/users');


//exercicio 1 iniciar o servidor
const app = express();

app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

//exercicio 5 da semana 10 - organizando o projeto
app.use(placesRoutes);

app.use(usersRoutes);

//exercicio 1 iniciar o servidor
app.listen(3333, () => console.log('Aplicação online na porta 3333 🟢'));
