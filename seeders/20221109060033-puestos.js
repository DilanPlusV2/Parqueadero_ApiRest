'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    return queryInterface.bulkInsert('puestos', [
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      },
      {
        estado:'Disponible',
        IdZonaParqueo:1
      }
    ]);
  },

  async down (queryInterface) {
    return queryInterface.bulkDelete('puestos',{},null);
  }
};
