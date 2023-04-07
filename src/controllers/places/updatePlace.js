const Place = require("../../models/place");

async function updatePlace (request, response) {
    try {
        const { id } = request.params;
        
        const placeInDatabase = await Place.findByPk(id);

        if (!placeInDatabase) {
            return response.status(404).json({ message: 'Instituição não encontrada.' });
        }

        placeInDatabase.name = request.body.name || placeInDatabase.name;
        placeInDatabase.contact = request.body.contact || placeInDatabase.contact;
        placeInDatabase.opening_hours = request.body.opening_hours || placeInDatabase.opening_hours;
        placeInDatabase.description = request.body.description || placeInDatabase.description;
        placeInDatabase.latitude = request.body.latitude || placeInDatabase.latitude;
        placeInDatabase.longitude = request.body.longitude || placeInDatabase.longitude;

        await placeInDatabase.save();

        response.json(placeInDatabase);
        
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Não foi possivel concluir a operação'});
    }
}

module.exports = updatePlace;