"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class account extends Model {
    static associate(models) {}
  }
  account.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      interests: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      about_me: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      work: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      max_destances: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      age_range: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      location_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      privacy: {
        type: DataTypes.BOOLEAN,
        foreignKey: true
      }
    },
    {
      sequelize,
      modelName: "account",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return account;
};
