module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('products', {
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
    description: {
      type: 'VARCHAR',
      required: true
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
    height: {
      type: 'VARCHAR',
      required: false
    },
    depth: {
      type: 'VARCHAR',
      required: false
    },
    width: {
      type: 'VARCHAR',
      required: false
    }
  }, {
    sequelize,
    modelName: 'product',
  });
  return Product;
}



