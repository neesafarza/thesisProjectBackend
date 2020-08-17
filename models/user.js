'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: 'VARCHAR',
      unique: true,
      required: true
    },
    password: {
      type: 'VARCHAR',
      required: true
    },
    name: {
      type: 'VARCHAR',
      required: true
    },
    lastname: {
      type: 'VARCHAR',
      required: true
    },
    telephone: {
      type: DataTypes.INTEGER,
      required: false
    },
    email: {
      type: 'VARCHAR',
      unique: true,
      required: true
    },
    address: {
      type: 'VARCHAR',
      required: false
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      required: true
    },
    created_at: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      default: DataTypes.NOW
    },
    gender: {
      type: 'VARCHAR',
      required: false
    },

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};