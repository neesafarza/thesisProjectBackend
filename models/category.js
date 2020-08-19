module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'VARCHAR',
      unique: true,
      required: true
    }
  });
  return category 
}





