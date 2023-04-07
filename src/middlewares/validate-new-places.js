const yup = require("yup");

const placeSchema = yup.object().shape({
    name: yup.string().required('O nome do lugar é obrigatório'),
    contact: yup.string(),
    opening_hours: yup.string(),
    description: yup.string(),
    latitude: yup.number('Latitude deve ser um número'),
    longitude: yup.number('Longitude deve ser um número'),
});

function validateNewPlace(request, response, next) {
    try {
        placeSchema.validateSync(request.body, { abortEarly: false })
      next()
    } catch (error) {
      response.status(400).json({ message: error.message })
    }
  }

  module.exports = validateNewPlace;