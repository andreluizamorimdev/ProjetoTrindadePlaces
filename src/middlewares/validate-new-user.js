const yup = require("yup");

const userSchema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório.'),
    email: yup.string().email('O email é inválido.').required('O email é obrigatório.'),
    username: yup.string().required('O nome de usuário é obrigatório.'),
    password: yup.string().required('A senha é obrigatória.').min(8, 'A senha deve ter no mínimo 8 caracteres.')
});
  

function validateNewUser(request, response, next) {
    try {
        userSchema.validateSync(request.body, { abortEarly: false });
        next();
    } catch (err) {
        response.status(400).json({ message: err.errors });
    }
}

module.exports = validateNewUser;