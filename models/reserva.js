'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {

  }
  Reserva.init({
    fecha: DataTypes.DATE,
    hora: DataTypes.TIME,
    descripcion: DataTypes.STRING,
    IdUsuario: DataTypes.INTEGER,
    IdPuesto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reserva',
  });
  return Reserva;
};