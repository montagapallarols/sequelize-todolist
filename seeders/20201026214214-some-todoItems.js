'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "buy coffee",
          deadline: "tuesday",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      { task: "create database",
        deadline: "wednesday",
        createdAt: new Date(),
        updatedAt: new Date()
    }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  }
};
