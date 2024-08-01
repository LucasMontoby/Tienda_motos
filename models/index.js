// const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Moto = require('./Moto');
const Categoria = require('./Categoria');

Categoria.hasMany(Moto, { foreignKey: 'categoria_id' });
Moto.belongsTo(Categoria, { foreignKey: 'categoria_id' });

module.exports = {
  sequelize,
  Moto,
  Categoria
};
