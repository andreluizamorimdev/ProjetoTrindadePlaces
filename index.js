const express = require('express');
const connection = require('./src/database');
const Place = require('./src/models/place');
const { Sequelize } = require("sequelize");

//exercicio 1 iniciar o servidor
const app = express();

app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

//exercicio 3 rota post criada
app.post('/places', async (request, response) => {
    try {
        const data = {
            name: request.body.name,
            contact: request.body.contact,
            opening_hours: request.body.opening_hours,
            description: request.body.description,
            latitude: request.body.latitude,
            longitude: request.body.longitude
        }

        if (typeof data.name !== "string" || data.name.trim() === "") {
            return response.status(400).json({ message: "Nome é obrigatório" });
        }

        if (typeof data.contact !== "string" || data.contact.trim() === "") {
            return response.status(400).json({ message: "Contato não pode estar estar vazio" });
        }

        if (typeof data.opening_hours !== "string" || data.opening_hours.trim() === "") {
            return response.status(400).json({ message: "Horário de funcionamento não pode estar vazio" });
        }

        if (typeof data.description !== "string" || data.description.trim() === "") {
            return response.status(400).json({ message: "Descrição não pode estar vazia" });
        }

        if (typeof data.latitude !== "number" || isNaN(data.latitude)) {
            return response.status(400).json({ message: "Latitude deve ser um número" });
        }

        if (typeof data.longitude !== "number" || isNaN(data.longitude)) {
            return response.status(400).json({ message: "Longitude deve ser um número" });
        }

        const placeAlreadyExists = await Place.findOne({
            where: Sequelize.where(
                Sequelize.fn('lower', Sequelize.col('name')),
                Sequelize.fn('lower', data.name)
            )
        });
        
        if (placeAlreadyExists) {
            return response.status(400).json({ message: "Este lugar já foi cadastrado no banco" });
        }

        const place = await Place.create(data);

        response.status(201).json(place);

    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Não foi possivel concluir a operação"});
    }
});


//exercicio 4 rota Get criada
app.get('/places', async (request, response) => {
    try {
        const places = await Place.findAll();
        response.json(places);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Não foi possivel concluir a operação"})
    }
});

//exercicio 1 iniciar o servidor
app.listen(3333, () => console.log('Aplicação online na porta 3333 🟢'));
