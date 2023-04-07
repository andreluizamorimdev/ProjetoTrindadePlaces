const Place = require("../../models/place");

async function findPlaces (request, response) {
    try {
        const places = await Place.findAll({ where: { userId: request.body.userId }});
        response.json(places);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Não foi possivel concluir a operação"})
    }
}
module.exports = findPlaces;