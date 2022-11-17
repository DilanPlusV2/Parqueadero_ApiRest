'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
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

  // eslint-disable-next-line no-unused-vars
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('zonaparqueo',{},null);
  }
};
