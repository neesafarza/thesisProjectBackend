module.exports = (sequelize, DataTypes) => {
  const BasketProduct = sequelize.define('basketProduct', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    basket_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  return BasketProduct;
}
