'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class puestos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  puestos.init({
    estado: DataTypes.STRING,
    IdZonaParqueo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'puestos',
  });
  return puestos;
};