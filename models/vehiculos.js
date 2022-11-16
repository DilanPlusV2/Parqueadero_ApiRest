'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehiculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vehiculos.init({
    placa: DataTypes.STRING,
    color: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    IdUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vehiculos',
  });
  return vehiculos;
};