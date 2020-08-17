'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.INTEGER,
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
          type: Sequelize.INTEGER,
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
          type: Sequelize.DATEONLY,
          required: true
        },
        created_at: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          default: Sequelize.NOW
        },
        gender: {
          type: 'VARCHAR',
          required: false
        },
      },
      {
        schema: 'public'                      // default: public, PostgreSQL only.
      }
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
          type: 'VARCHAR',
          unique: true,
          required: true
        }
      },
      {
        schema: 'public'                      // default: public, PostgreSQL only.
      }
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
          type: 'VARCHAR',
          required: true,
          unique: true
        }
      },
      {
        schema: 'public'                      // default: public, PostgreSQL only.
      }
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
          type: 'VARCHAR',
          required: true
        },
        description:{
          type: 'VARCHAR',
          required: true
        },
        created_at: {
          type: Sequelize.DATEONLY,
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
          type: Sequelize.INTEGER,
          required: true
        },
        quantity: {
          type: Sequelize.INTEGER,
          required: true,
          default: 1
        },
        size: {
          type: 'VARCHAR',
          required: false
        }
      },
      {
        schema: 'public'                      // default: public, PostgreSQL only.
      }
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
      {
        schema: 'public'                      // default: public, PostgreSQL only.
      }
    )

  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropAllTables()
  }
};
