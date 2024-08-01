const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./Categoria');

const Moto = sequelize.define('Moto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
        },
        imagen: {
            type: DataTypes.STRING,
        },
        categoria_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categoria',
                key: 'id'
                }
            }
        },
        {
            tableName: 'motos',
            timestamps: false

        });

        Moto.belongsTo(Categoria, {foreignKey: 'categoria_id'});

        module.exports = Moto;