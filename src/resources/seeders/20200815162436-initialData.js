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

    await queryInterface.bulkInsert("products", [
      {
        id: 1,
        user_id: 1,
        category_id: 1,
        title: 'Nike Superfly Elite',
        description: `13 years since its last update, the new Nike Superfly Elite Racing Spike delivers a high-tech design for the track. Ultra-breathable Flyweave fabric helps keep you cool, while an innovative spike plate with 8 removable pins provides grip to power through the finish.
        Benefits
        Dynamic Fit technology wraps the foot for increased stabilizing support.
        Generative plate design combines zones of stiffness and flexibility.
        8 removable stainless-steel pins grip the track.
        Seamless woven upper for breathable comfort. Targeted ventilation and structure areas are engineered into the material. The weave is inspired by seat belt webbing to increase tension during acceleration.
        Ideal for 100m-400m sprinters
        Shown: Black/White/Indigo Fog
        Style: 835996-002`,
        created_at: Date.now(),
        images: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/j45ithcye9z1zw7xghp7/superfly-elite-racing-spike-MkTbqx88.jpg'],
        location: 'Barcelona',
        price: 130,
        quantity: [10, 20, 30, 45, 30, 25],
        size: [38, 39, 40, 41, 42, 43]
      },
      {
        id: 2,
        user_id: 1,
        category_id: 2,
        title: 'Nike In-Season TR 9',
        description: `SUPPORT FOR CARDIO AND TRAINING.
        The Nike In-Season TR 9 is light, stable and features deep, comfortable footbed for superior impact absorption and energy return throughout your entire workout.
        Benefits
        Flat-to-the-ground "sit in" construction for medial and lateral arch support and containment.
        Foot-to-foam construction in the footbed and a dual-density cushioning gives it bounce and makes it totally runnable.
        An over-the-laces mid foot gore strap creates active containment and a more adaptive locked-in fit and feel.
        A durable, multidirectional traction pattern at high wear areas on the outsole.
        A memory foam sock liner provides the ultimate comfort.
        Jelly pull tab on the heel has a durable finish and creates a nice detail.
        Shown: Fire Pink/Washed Coral/White/Magic Ember
        Style: AR4543-603`,
        created_at: Date.now(),
        images: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f6b402bc-53f0-4932-b5ec-c0bc52dad555/in-season-tr-9-womens-training-shoe-F6MRbL.jpg'],
        location: 'Barcelona',
        price: 70,
        quantity: [35, 30, 25, 30, 25, 20],
        size: [35, 36, 37, 38, 39, 40]
      },
      {
        id: 3,
        user_id: 2,
        category_id: 3,
        title: 'SQUARE NECK T-SHIRT',
        description: `PINK - 5857/024
        Square neck T-shirt with long puffed sleeves on the shoulder.`,
        created_at: Date.now(),
        images: ['https://static.zara.net/photos///2020/S/0/1/p/5857/024/620/2/w/810/5857024620_6_1_1.jpg?ts=1593687806345'],
        location: 'Barcelona',
        price: 8,
        quantity: [30, 25, 15, 10],
        size: ['S', 'M', 'L', 'XL']
      },
      {
        id: 4,
        user_id: 2,
        category_id: 3,
        title: 'REGULAR FIT LONG LENGTH DETAIL T-SHIRT',
        description: `BLACK - 1887/350
        Regular fit t-shirt with extra length. Round neck and short sleeves. Asymmetric hem.
        JOIN LIFE
        Care for fiber: organic cotton.
        Cotton grown using natural fertilizers and pesticides. In addition, genetically modified seeds are not used in its cultivation, which helps to conserve the biodiversity of the seeds and the fertility of the soil.`,
        created_at: Date.now(),
        images: ['https://static.zara.net/photos///2020/S/0/2/p/1887/350/800/2/w/810/1887350800_1_1_1.jpg?ts=1593769181563'],
        location: 'Barcelona',
        price: 10,
        quantity: [30, 35, 15, 10],
        size: ['S', 'M', 'L', 'XL']
      },
      {
        id: 5,
        user_id: 2,
        category_id: 4,
        title: 'JEAN SKINNY TERRA BLUE',
        description: `Regular fit jean.`,
        created_at: Date.now(),
        images: [
          'https://tascani.vteximg.com.br/arquivos/ids/169663-395-593/IMG_4366.jpg?v=637309510407570000',
          'https://tascani.vteximg.com.br/arquivos/ids/169665-395-593/IMG_4372.jpg?v=637309511130370000',
          'https://tascani.vteximg.com.br/arquivos/ids/169666-395-593/IMG_4370.jpg?v=637309511416430000'
        ],
        location: 'Barcelona',
        price: 12,
        quantity: [20, 25, 35, 40],
        size: [28, 29, 30, 31]
      },
      {
        id: 6,
        user_id: 3,
        category_id: 4,
        title: 'JEANS HI RISE SKINNY VINTAGE',
        description: `DARK BLUE - 9123/930
        Stretch fabric jeans with holding power technology. With a vintage-style high rise and five pockets. Washed effect. Front zip and metal button closure.
        JOIN LIFE
        Care for fiber: at least 90% organic cotton.
        Cotton grown using natural fertilizers and pesticides. In addition, genetically modified seeds are not used in its cultivation, which helps to conserve the biodiversity of the seeds and the fertility of the soil.`,
        created_at: Date.now(),
        images: [
          'https://static.zara.net/photos///2020/S/0/1/p/9123/930/407/2/w/810/9123930407_6_1_1.jpg?ts=1597070511221',
        ],
        location: 'Barcelona',
        price: 8,
        quantity: [20, 25, 35, 40],
        size: [28, 29, 30, 31]
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("users", null, {});
    queryInterface.bulkDelete("categories", null, {});
  },

};
