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
          allowNull: false
        },
        username: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        lastname: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        telephone: {
          type: Sequelize.INTEGER(2147483647),
          validate: {
            isInt: true,
          },
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        birthdate: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        gender: {
          type: Sequelize.STRING,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
      },
    )

    await queryInterface.createTable(
      'categories',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          unique: true,
          required: true
        }
      },
    )

    await queryInterface.createTable(
      'tags',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          required: true,
          unique: true
        }
      },
    )

    await queryInterface.createTable(
      'products',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        category_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'categories',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        title: {
          type: Sequelize.STRING,
          required: true
        },
        description: {
          type: Sequelize.STRING,
          required: true
        },
        created_at: {
          type: Sequelize.DATEONLY,
          required: true,
          default: Date.now()
        },
        images: {
          type: Sequelize.STRING,
          required: true
        },
        location: {
          type: Sequelize.STRING,
          required: true
        },
        price: {
          type: Sequelize.INTEGER,
          required: true
        },
        quantity: {
          type: Sequelize.INTEGER,
          required: true,
          default: 1
        },
        height: {
          type: Sequelize.STRING,
          required: false
        },
        depth: {
          type: Sequelize.STRING,
          required: false
        },
        width: {
          type: Sequelize.STRING,
          required: false
        }
      },
    )

    await queryInterface.createTable(
      'purchases',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        product_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'products',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        user_id: {
          type: Sequelize.INTEGER,
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
