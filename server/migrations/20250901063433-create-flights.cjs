'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      flightNumber: { type: Sequelize.STRING, allowNull: false },
      origin: { type: Sequelize.STRING, allowNull: false },
      destination: { type: Sequelize.STRING, allowNull: false },
      price: { type: Sequelize.FLOAT, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};
