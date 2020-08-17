const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
    },
    onUpdate: 'cascade',
    onDelete: 'cascade'
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id'
    },
    onUpdate: 'cascade',
    onDelete: 'cascade'
    },
    title: {
      type: 'VARCHAR',
      required: true
    },
    description:{
      type: 'VARCHAR',
      required: true
    },
    created_at: {
      type: DataTypes.DATEONLY,
      required: true,
      default: Date.now()
    },
    images: {
      type: 'VARCHAR',
      required: true
    },
    location: {
      type: 'VARCHAR',
      required: true
    },
    price: {
      type: DataTypes.INTEGER,
      required: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      required: true,
      default: 1
    },
    size: {
      type: 'VARCHAR',
      required: false
    }
    }, {
    sequelize,
    modelName: 'Products',
    });
    return Products;
  }



