const bcrypt = require('bcrypt');

const User = require("../../models/user");

async function createUser (request, response) {
    try {

        const userInDatabase = await User.findOne({
            where: {
                username: request.body.username
            }
        });

        if (userInDatabase) {
            return response.status(409).json({ message: 'Já existe um usuário com essa conta' });
        }

        const hash = await bcrypt.hash(request.body.password, 10)

        const newUser = {
            name: request.body.name,
            email: request.body.email,
            username: request.body.username,
            password: hash
        }

        // Criar novo usuário
        const user = await User.create(newUser);
        const { password, ...userData } = user.toJSON()

        // Retornar usuário criado
        response.status(201).json(userData);

    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' });
    }
}

module.exports = createUser;