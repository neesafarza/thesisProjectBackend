"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        username: "neesa14",
        password: 1234,
        name: "aneesa",
        lastname: "zafri",
        email: "user1@mail.com",
        address: "123, drury lane",
        birthdate: "1996-08-14",
        gender: false
      },
      {
        username: "juan10",
        password: 1234,
        name: "juan",
        lastname: "Sanchez",
        email: "user2@mail.com",
        address: "123, drury lane",
        birthdate: "1996-08-14",
        gender: true
      }
    ]);

    await queryInterface.bulkInsert("categories", [
      {
        name: "testMens"
      }, 
      {
        name: "testWomens"
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("users", null, {});
    queryInterface.bulkDelete("categories", null, {});
  },

};
