'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',[
      {
        name:'Kwan',
        type: 'student',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      name:'Leo',
      type: 'instuctor',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    name:'Fluke',
    type: 'teacher_assistant',
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
},
    ], {})
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Users', null, {});
     
  }
};
