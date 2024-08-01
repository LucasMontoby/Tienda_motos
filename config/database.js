const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('tienda_motos', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
})

module.exports = sequelize;