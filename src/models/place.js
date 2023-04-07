const { Sequelize } = require("sequelize");
const connection = require("../database");
const User = require("./user");

//exercicio 2 Model Place criado
const Place = connection.define('place', {
    id:  {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contact: {
        type: Sequelize.STRING,
    },
    opening_hours: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING
    },
    latitude: {
        type: Sequelize.DECIMAL
    },
    longitude: {
        type: Sequelize.DECIMAL
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }
});

Place.belongsTo(User);

module.exports = Place;