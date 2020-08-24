require('dotenv').config()

module.exports = {
  development: {
    url: `postgres://postgres:1234@127.0.0.1:5432/thesis_db`,
    dialect: 'postgres',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
}
