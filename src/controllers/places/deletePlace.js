const Place = require("../../models/place");

async function deletePlace (request, response) { 
    try {
        const { id } = request.params;
        const placeInDatabase = await Place.findByPk(id);
        if(!placeInDatabase) {
            return response.status(404).json({ message: 'Lugar não encontrado no sistema, favor verifique novamente o id inserido.'});
        }
        
        await Place.destroy({ where: { id: id }});
        
        response.status(200).json({ message: 'Lugar deletado com sucesso do sistema.'});       
                
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Não foi possivel concluir a operação'});
    }
}

module.exports = deletePlace;