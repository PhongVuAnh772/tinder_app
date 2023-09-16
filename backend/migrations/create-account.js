"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("account", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      interests: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      about_me: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      work: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      max_destances: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      age_range: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      location_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      privacy: {
        type: Sequelize.BOOLEAN,
        foreignKey: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("account");
  },
};
