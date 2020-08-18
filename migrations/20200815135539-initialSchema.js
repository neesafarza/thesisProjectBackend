'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'users',
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
        },
        username: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        telephone: {
          type: Sequelize.INTEGER(2147483647),
          allowNull: true,
          validate: {
            isInt: true,
          },
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
          validate: {
            isEmail: true,
          },
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        birthdate: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        gender: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
    )

    await queryInterface.createTable(
      'categories',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        }
      },
    )

    await queryInterface.createTable(
      'tags',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        }
      },
    )

    await queryInterface.createTable(
      'products',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        category_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'categories',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        images: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        location: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        height: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        depth: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        width: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
    )

    await queryInterface.createTable(
      'purchases',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        product_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'products',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        }
      },
    )

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropAllTables();
  }
};
