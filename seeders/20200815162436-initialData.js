"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert("users", [
      {
        username: "neesa14",
        password: 1234,
        name: "aneesa",
        lastname: "zafri",
        email: "user1@gmail.com",
        address: "123, drury lane",
        birthdate: "1996-08-14",
        createdAt: "1996-08-14",
        updatedAt: "1996-08-14",
        gender: "female"
      },
      {
        username: "juan10",
        password: 1234,
        name: "juan",
        lastname: "Sanchez",
        email: "user2@gmail.com",
        address: "123, drury lane",
        birthdate: "1996-08-14",
        createdAt: "1996-08-14",
        updatedAt: "1996-08-14",
        gender: "male"
      },
      {
        username: "Admin",
        password: "$2b$10$J8bMTW0T.DpJfPv1jYy0uuINzAJK.6QFtQIZr0RMR91filXL.Po0e",
        name: "admin",
        lastname: "admin",
        email: "admin@gmail.com",
        address: "123, drury lane",
        birthdate: "1996-08-14",
        createdAt: "1996-08-14",
        updatedAt: "1996-08-14",
        gender: "prefer not to say"
      }
    ]);

    await queryInterface.bulkInsert("categories", [
      {
        name: "Bedroom"
      },
      {
        name: "Living Room"
      },
      {
        name: "Kitchen"
      },
      {
        name: "Bathroom"
      }
    ]);

    const user = await queryInterface.sequelize.query(
      `SELECT id from users;`
    )

    const category = await queryInterface.sequelize.query(
      `SELECT id from categories;`
    )

    await queryInterface.bulkInsert("products", [
      {
        user_id: user[0][0].id,
        category_id: category[0][0].id,
        title: 'Fancy Bedroom Chair',
        description: `Regal Bedroom Chair`,
        images: 'https://lucas-furniture.co.uk/Photos/W653_Regal-Bedroom-Chair-5055299480113.jpg',
        location: 'Barcelona',
        price: 350,
        quantity: 1,
        material: "stainless steel",
        height: 83,
        depth: 52,
        width: 59,
        createdAt: "1996-08-14",
        updatedAt: "1996-08-14",
      },
      {
        user_id: user[0][0].id,
        category_id: category[0][2].id,
        title: 'Nice Dining Table',
        description: `Regal Oval Extending Dining Table`,
        images: 'https://lucas-furniture.co.uk/Photos/W253_Regal-Oval-Extending-Table-5055299480786.jpg',
        location: 'Barcelona',
        price: 470,
        quantity: 1,
        material: "stainless steel",
        height: 76,
        depth: 107,
        width: 220,
        createdAt: "1996-08-14",
        updatedAt: "1996-08-14",
      },
      {
        user_id: user[0][0].id,
        category_id: category[0][1].id,
        title: 'Awesome coffee table',
        description: `Regal Oval Coffee Table`,
        images: 'https://lucas-furniture.co.uk/Photos/W253_Regal-Oval-Coffee-Table-5055299480892.jpg',
        location: 'Barcelona',
        price: 210,
        quantity: 1,
        material: "stainless steel",
        height: 45,
        depth: 70,
        width: 110,
        createdAt: "1996-08-14",
        updatedAt: "1996-08-14",
      },
      {
        user_id: user[0][1].id,
        category_id: category[0][3].id,
        title: 'Cool Bathroom Mirror',
        description: `Black almost square bathroom mirror with shelf`,
        images: 'https://cdn.rockettstgeorge.co.uk/media/catalog/product/b/l/black-almost-square-bathroom-mirror-with-shelf.jpg',
        location: 'London',
        price: 95,
        quantity: 1,
        material: "stainless steel",
        height: 50,
        depth: 17,
        width: 40,
        createdAt: "1996-08-14",
        updatedAt: "1996-08-14",
      },
      {
        user_id: user[0][1].id,
        category_id: category[0][3].id,
        title: 'Cool Bathroom Mirror',
        description: `Black almost square bathroom mirror with shelf`,
        images: 'https://cdn.goodshomedesign.com/wp-content/uploads/2017/10/Amazing-Wood-Furniture-13-640x478.jpg',
        location: 'Barcelona',
        price: 95,
        quantity: 1,
        material: "stainless steel",
        height: 50,
        depth: 17,
        width: 40,
        createdAt: "1996-08-14",
        updatedAt: "1996-08-14",
      },
      {
        user_id: user[0][1].id,
        category_id: category[0][3].id,
        title: "To Sara's cat",
        description: `Black almost square bathroom mirror with shelf`,
        images: 'https://www.dhoumm.co/cdn-k1/am/amazing-furniture-ideas-for-cats-nova_room-interior-and-decoration.jpg',
        location: 'Barcelona',
        price: 95,
        quantity: 1,
        material: "stainless steel",
        height: 50,
        depth: 17,
        width: 40,
        createdAt: "1996-08-14",
        updatedAt: "1996-08-14",
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("users", null, {});
    queryInterface.bulkDelete("categories", null, {});
    queryInterface.bulkDelete("products", null, {});
  },

};
