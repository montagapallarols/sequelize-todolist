'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "food list",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      { 
        name: "code list",
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  }
};
