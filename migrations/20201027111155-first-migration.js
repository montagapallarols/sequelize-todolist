'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn (
      "todoItems",
      "important",
      { type: Sequelize.BOOLEAN },
      {}
    );
    /**
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todoItems", "important", {});
    /**
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
