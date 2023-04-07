const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require("../../models/user");

async function createLogin (request, response) {
    try {

        const userInDatabase = await User.findOne({ where: { username: request.body.username } });

        if (!userInDatabase) {
            return response.status(404).json({ message: 'Usuario não encontrado' });
        }

        const passwordIsValid = await bcrypt.compare(request.body.password, userInDatabase.password);

        if (!passwordIsValid) {
            return response.status(400).json({ message: 'Credenciais incorretas' });
        }

        const token = jwt.sign(
            { 
                id: userInDatabase.id 
            }, 
            process.env.TOKEN_KEY, {
                expiresIn: '1h' 
            }
        );

        response.json({ name: userInDatabase.name, token: token });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' });
    }
}
module.exports = createLogin;