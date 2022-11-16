'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('zonaparqueo', [
      {
        nombre:'Zona 1'
      },
      {
        nombre:'Zona 2'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('zonaparqueo',{},null);
  }
};
