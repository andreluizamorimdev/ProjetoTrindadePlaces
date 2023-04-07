const Place = require("../../models/place");

async function createPlace(request, response) {
    try {
        const data = {
            name: request.body.name,
            contact: request.body.contact,
            opening_hours: request.body.opening_hours,
            description: request.body.description,
            latitude: request.body.latitude,
            longitude: request.body.longitude,
            userId: request.body.userId
        }
        
        const placeAlreadyExists = await Place.findOne({ where: { name: data.name } });
        
        if (placeAlreadyExists) {
            return response.status(400).json({ message: "Este lugar já foi cadastrado no banco" });
        }

        const place = await Place.create(data);

        response.status(201).json(place);

    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Não foi possivel concluir a operação"});
    }
}

module.exports = createPlace;