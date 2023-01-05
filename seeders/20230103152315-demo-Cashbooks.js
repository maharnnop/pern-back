'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cashbooks',[
      {
        name:'housing loan',
        amount: 14000,
        type: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      name:'salary',
      amount: 35000,
      type: true,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    name:'fuel',
        amount: 1000,
        type: false,
        createdAt: new Date(),
        updatedAt: new Date(),
},
{
  name:'car parking',
      amount: 1000,
      type: false,
      createdAt: new Date(),
      updatedAt: new Date(),
},
{
  name:'extra work',
      amount: 10000,
      type: true,
      createdAt: new Date(),
      updatedAt: new Date(),
},

    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cashbooks', null, {});
  }
};
