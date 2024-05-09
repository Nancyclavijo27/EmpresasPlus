const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa la instancia de Sequelize configurada

class Cliente extends Model {}

Cliente.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Cliente',
  timestamps: false, // Opcional: Deshabilita la generación automática de timestamps
});



module.exports = Cliente;
