"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert("users", [
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
        gender: "prefer not to say",
        description: "Welcome to Admin's Furnitures. We’ve spent years combining tried and tested joinery techniques with the modern mastery of technology and tools giving our final products a truly untouchable finish. Take a look at our items and feel free to ask us for any more information. We hope to provide you with one of our items very soon!"
      },
      {
        username: "LeoD",
        password: "$2b$10$18rsNWa1cMK/X/yhi2cjkunCocnzlQlNYy22E0YFN2TWlcqe9Li36",
        name: "Leonardo",
        lastname: "DiCaprio",
        email: "leonardo@gmail.com",
        address: "123, Los Pepes",
        birthdate: "1996-08-14",
        createdAt: "2020-08-24 14:21:17.767+01",
        updatedAt: "2020-08-24 14:21:17.767+01",
        gender: "Male",
        description: "Welcome to Leo DiCaprio's Boutique Co. You can find many things here even unique doors of the titanic. We’ve spent years combining tried and tested joinery techniques with the modern mastery of technology and tools giving our final products a truly untouchable finish. Take a look at our items and feel free to ask us for any more information."
      },
      {
        username: "ladygaga",
        password: "$2b$10$IP2t6Yyq/l8rosOIQ5iy/eonCFcUBui7XZLzfIB3wq62CosOGcC62",
        name: "Lady",
        lastname: "Gaga",
        email: "ladygaga@hotmail.com",
        address: "Soller",
        birthdate: "1994-01-01",
        createdAt: "2020-08-24 14:28:34.309+01",
        updatedAt: "2020-08-24 14:28:34.309+011",
        gender: "Female",
        description: "Welcome to Lady Gaga's Vintage Boutique Co. We create one off, unique pieces of furniture with Lady Gaga's style. I make them myself with the latest technologies to make it more fancy!"
      },
      {
        username: "janedoe",
        password: "$2b$10$4kaAVBOXUW0QXh9m3kGFieEtzqwfqEugc9prvoUPcs0lFN8QTk2Ru",
        name: "Jane",
        lastname: "Doe",
        email: "janedoe@gmail.com",
        address: "123, Barcelona",
        birthdate: "2019-01-02",
        createdAt: "2020-08-24 14:33:31.116+01",
        updatedAt: "2020-08-24 14:33:31.116+01",
        gender: "Female",
        description: "Welcome to Jane Doe's Vintage Boutique Co. We create one off, unique pieces of furniture using the highest grade of materials. We’ve spent years combining tried and tested joinery techniques with the modern mastery of technology and tools giving our final products a truly untouchable finish. Take a look at our items and feel free to ask us for any more information. We hope to provide you with one of our items very soon!"
      },

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

    const product = await queryInterface.sequelize.query(
      `SELECT id FROM products;` 
    )

    await queryInterface.bulkInsert("products", [
      {
        user_id: user[0][1].id,
        category_id: category[0][2].id,
        title: "Drop Leaf Expandable Table",
        description:
          "Perfect for small spaces! It doubles in width when its two side leaves are extended so that you can seat two on a normal day and make room for six when company calls. I’ve built it from a durable steel frame and added a solid mango wood top.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598276200/box-frame-drop-leaf-expandable-table-z_zwxycq.jpg",
        location: "London",
        price: 499,
        quantity: 1,
        material: "wood",
        height: 76,
        depth: 81,
        width: 60,
        createdAt: "2020-08-15",
        updatedAt: "2020-08-15",
      },

      {
        user_id: user[0][2].id,
        category_id: category[0][2].id,
        title: "Framework Leather Dining Chair",
        description:
          "Both modern looking and a classic. The smooth leather makes it extremely comfortable, and a versatile piece for the dining room or the office. Beautiful nut colour, comes in a set of 2",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598276200/framework-leather-dining-chair-saddle-o_bmvhvz.jpg",
        location: "Berlin",
        price: 279,
        quantity: 2,
        material: "leather",
        height: 76,
        depth: 53,
        width: 83,
        createdAt: "2020-08-17",
        updatedAt: "2020-08-17",
      },

      {
        user_id: user[0][1].id,
        category_id: category[0][2].id,
        title: "Gold metal bar cart",
        description:
          "Cocktail station to display your favorite spirits. Fitted with four wheels, it’s a flexible piece, perfect for parties.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598276207/terrace-bar-cart-o_bhlmqv.jpg",
        location: "London",
        price: 369,
        quantity: 1,
        material: "metal",
        height: 35,
        depth: 23,
        width: 70,
        createdAt: "2020-08-11",
        updatedAt: "2020-08-11",
      },

      {
        user_id: user[0][2].id,
        category_id: category[0][2].id,
        title: "Reclaimed Wood Dining Bench",
        description:
          "Handmade from reclaimed pine. This dining bench shows the knots and natural imperfections that makes this piece one of a kind.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598276198/emmerson-reclaimed-wood-dining-bench-stone-gray-o_tddwur.jpg",
        location: "Milan",
        price: 1350,
        quantity: 1,
        material: "wood",
        height: 45,
        depth: 38,
        width: 185,
        createdAt: "2020-07-11",
        updatedAt: "2020-07-11",
      },

      {
        user_id: user[0][3].id,
        category_id: category[0][2].id,
        title: "Mid-century bar cabinet",
        description:
          "Acorn-finished, mid-century bar cabinet: classic, retro style. It opens up to reveal plenty of space for your bottles and stemware, with an extra top compartment to stash even more happy hour essentials.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598276199/mid-century-bar-cabinet-acorn-2-o_qcsyir.jpg",
        location: "Barcelona",
        price: 950,
        quantity: 1,
        material: "wood",
        height: 127,
        depth: 48,
        width: 81,
        createdAt: "2020-07-19",
        updatedAt: "2020-07-19",
      },

      {
        user_id: user[0][1].id,
        category_id: category[0][1].id,
        title: "Bronze Gothic Arched Window Wall Mirror",
        description:
          "Make a real statement with this beautiful arched window wall mirror. Impressive and sustantial in size, the solid metal frame has been finished in a muted bronze leaf which has been lightly distressed for an aged appearance.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598274979/Bronze-Gothic-Arched-Window-Mirror-2_o8xjuc.jpg",
        location: "Barcelona",
        price: 300,
        quantity: 1,
        material: "metal",
        height: 150,
        depth: 3,
        width: 80,
        createdAt: "2000-08-19",
        updatedAt: "2000-08-19",
      },

      {
        user_id: user[0][2].id,
        category_id: category[0][1].id,
        title: "Round Coffee Table with Smoked Glass Top – Bronze",
        description: "Highly reflective and coolly tactile, this is a truly striking and solid table that needs minimal dressing as the reflective glass top is so beautiful.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598275013/PICKFORD-Coffee-Table-Champagne-Main-1100_ufohuz.jpg",
        location: "Soller",
        price: 400,
        quantity: 2,
        material: "glass",
        height: 42,
        depth: 42,
        width: 90,
        createdAt: "2001-08-19",
        updatedAt: "2001-08-19",
      },

      {
        user_id: user[0][3].id,
        category_id: category[0][1].id,
        title: "Ryder Leather Armchair",
        description: "The Ryder Armchair was designed with lounging in mind. It's durable too, thanks to its top-grain leather upholstery and a sturdy frame.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598275011/ryder-leather-chair-h4577-hero-z_qoakgt.jpg",
        location: "Tenerife",
        price: 1000,
        quantity: 1,
        material: "leather",
        height: 105,
        depth: 93,
        width: 73,
        createdAt: "2011-08-9",
        updatedAt: "2011-08-9",
      },

      {
        user_id: user[0][1].id,
        category_id: category[0][1].id,
        title: "Awesome Green Sofa",
        description: "Light and compact, this pure, yet esthetic scandic design make this sofa stay in one's memory for a long time.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598275012/sofa_n18mjs.jpg",
        location: "Barcelona",
        price: 300,
        quantity: 1,
        material: "velvet",
        height: 85,
        depth: 92,
        width: 194,
        createdAt: "2011-08-9",
        updatedAt: "2011-08-9",
      },

      {
        user_id: user[0][2].id,
        category_id: category[0][3].id,
        title: "Classic oak Bathroom furniture set",
        description:
          `Furniture in a pure white finish is another popular bathroom furniture colour. White creates a clean, bright look and is a future-proof option, which means your bathroom won’t look dated five years down the line.
           White bathroom furniture comes in gloss and matt finishes. A glossy finish will bounce the light around, helping to enhance a sense of space in a small bathroom, while a matt finish is perfect for creating a contemporary look. It’s easy to introduce splashes of colour to your bathroom if you have opted for white furniture. Combine with bright colours for a vibrant theme or go neutral for a sense of calm and relaxation. You really can’t go wrong with white bathroom furniture.`,
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278042/classic-oak-bathroom-furniture-set-1-1_z3qskz.jpg",
        location: "Madrid",
        price: 350,
        quantity: 1,
        material: "wood",
        height: 76,
        depth: 81,
        width: 60,
        createdAt: "2020-08-15",
        updatedAt: "2020-08-15",
      },

      {
        user_id: user[0][3].id,
        category_id: category[0][3].id,
        title: "Belham Living Longbourn Over-the-Toilet Space Saver with Removable Legs",
        description:
          "Small-bathroom storage is a cinch - in several stylish ways - with this Belham Living Longbourn Over-the-Toilet Space Saver with Removable Legs. Crafted with durable MDF and solid hardwood (some color options with birch veneers), this heightened storage unit boasts an upper cabinet with two glass-paneled doors that open to storage space. Beneath, a single drawer offers a spot to stash small linens, styling tools, and toiletries. Keep the legs attached to the unit for over-the-toilet use, or detach the legs and mount the cabinet to the wall anywhere in the bathroom. Contemporary brushed nickel hardware throughout complements the sleek finish of your choice. Assembly required.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278043/dynimage_eeykwh.jpg",
        location: "Barcelona",
        price: 250,
        quantity: 2,
        material: "wood",
        height: 76,
        depth: 53,
        width: 83,
        createdAt: "2020-08-17",
        updatedAt: "2020-08-17",
      },

      {
        user_id: user[0][1].id,
        category_id: category[0][3].id,
        title: "Unique Mid-Century Upholstered Dining Chair",
        description:
          "The perfect statement piece for your home! A mid-century dining chair with a twist: I've upholstered it with a fun colourful print.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278025/2_llkl2a.jpg",
        location: "London",
        price: 324,
        quantity: 4,
        material: "fabric",
        height: 76,
        depth: 53,
        width: 52,
        createdAt: "2020-08-10",
        updatedAt: "2020-08-10",
      },

      {
        user_id: user[0][2].id,
        category_id: category[0][3].id,
        title: "Belham Living Longbourn Bathroom Floor Cabinet",
        description:
          "Keep fresh linens, paper products, and toiletries clean and close-at-hand in this Belham Living Longbourn Bathroom Floor Cabinet. Crafted with durable MDF and solid hardwood (some color options with birch veneers), this small-scale storage unit boasts four open shelves - two of them adjustable - for towels and washcloths. Beneath, four drawers offer spots to stash styling tools and toiletries. Contemporary brushed nickel hardware throughout complements the sleek finish of your choice. Assembly required.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278024/3_vgnqe7.jpg",
        location: "London",
        price: 179,
        quantity: 1,
        material: "wood",
        height: 35,
        depth: 23,
        width: 70,
        createdAt: "2020-08-11",
        updatedAt: "2020-08-11",
      },

      {
        user_id: user[0][3].id,
        category_id: category[0][3].id,
        title: "Linon Silas Two Door Mid Bathroom Cabinet",
        description:
          "Natural bamboo and clean lines give the Linon Silas Two Door Mid Bathroom Cabinet its spa feel. Perfect for keeping your bath tidy, this cabinet features two levels of shelving and double doors for tucked away storage. It's crafted of solid bamboo and naturally finished to allow the wood grain to sing.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278026/4_sbpobz.jpg",
        location: "Milan",
        price: 290,
        quantity: 1,
        material: "wood",
        height: 45,
        depth: 38,
        width: 185,
        createdAt: "2020-07-11",
        updatedAt: "2020-07-11",
      },

      {
        user_id: user[0][1].id,
        category_id: category[0][3].id,
        title: "4D Concepts Windsor Wicker Drawer Bathroom Cabinet",
        description:
          "Perfect for small spaces, the 4D Concepts Windsor Wicker Drawer Bathroom Cabinet is the ideal way to get the most storage out of your furniture without skimping on style. Made with a solid metal frame, this cabinet features seven spacious shelves for all of your bathroom necessities as well as four rattan wicker storage baskets to mix and match to your heart's content. A versatile black finish means that this piece will look great with any decorating style. Some assembly required.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278025/5_lacioq.jpg",
        location: "Barcelona",
        price: 174,
        quantity: 1,
        material: "metal",
        height: 174,
        depth: 48,
        width: 81,
        createdAt: "2020-07-19",
        updatedAt: "2020-07-19",
      },

      {
        user_id: user[0][2].id,
        category_id: category[0][3].id,
        title: "K&B Furniture BM1131 Metal Bathroom Rack",
        description:
          "Crafted from metal, the K&B Furniture BM1131 Metal Bathroom Rack boasts a durable design. The three shelves of this bathroom rack offer room for displaying décor, storing hygiene products, or arranging towels and wash cloths. Ornate metalwork designs along the walls of this bathroom rack give it an elegant touch.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278025/6_zwwjpp.jpg",
        location: "Madrid",
        price: 68,
        quantity: 1,
        material: "metal",
        height: 100,
        depth: 48,
        width: 81,
        createdAt: "2020-07-19",
        updatedAt: "2020-07-19",
      },

      {
        user_id: user[0][3].id,
        category_id: category[0][3].id,
        title: "Altra Furniture Reese Park Glass Door Storage Cabinet with 4 Fabric Bins",
        description:
          "Ideal for entryways, hallways, and rec rooms, the Altra Furniture Reese Park Glass Door Storage Cabinet with 4 Fabric Bins adds charm to any room offering ample storage space. Crafted from sturdy engineered wood and given a classic white finish, this storage cabinet has more than enough places to stash and stow your personal essentials. A glass cabinet door keeps towels and other linens dust-free and an interior adjustable shelf allows for customized storage options. Four upper compartments feature white unwoven fabric bins so you can store smaller items. The lower 8 cubbies are perfect for towels and decorative display pieces. This unit rests on 4 solid wood bun feet for a sophisticated look. Assembly required. Manufacturer’s limited 1-year warranty.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278043/7_dfxdmi.jpg",
        location: "Barcelona",
        price: 235,
        quantity: 1,
        material: "wood",
        height: 60,
        depth: 48,
        width: 81,
        createdAt: "2020-07-19",
        updatedAt: "2020-07-19",
      },

      {
        user_id: user[0][1].id,
        category_id: category[0][3].id,
        title: "Belham Living Longbourn Narrow Bath Cabinet",
        description:
          "Make the most of every inch of the bathroom with this slim-line, discreet Belham Living Longbourn Narrow Bath Cabinet. Crafted with durable MDF and solid hardwood (some color options with birch veneers), this small-scale storage unit boasts a single pullout drawer, a top door that flips up to reveal a small storage compartment, and a pullout rack that holds up to nine rolls of toilet paper at the ready. In the finish of your choice. Assembly required.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278041/8_wyhdfe.jpg",
        location: "Barcelona",
        price: 130,
        quantity: 1,
        material: "wood",
        height: 60,
        depth: 48,
        width: 81,
        createdAt: "2020-07-19",
        updatedAt: "2020-07-19",
      },

      {
        user_id: user[0][2].id,
        category_id: category[0][1].id,
        title: "Big Ben Large Wall Clock",
        description:
          "Big Ben Large Wall Clock is silent wall clock product from our Large Wall Clock collection. It is a perfect gift for offices, farmhouses and homes. ",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278501/bigbenclock_tea3xr.jpg",
        location: "Madrid",
        price: 45,
        quantity: 1,
        material: "metal",
        height: 30,
        depth: 5,
        width: 30,
        createdAt: "2020-06-20",
        updatedAt: "2020-06-20",
      },

      {
        user_id: user[0][3].id,
        category_id: category[0][0].id,
        title: "Handmade Foxy Cushion Cover",
        description:
          "Vulpes Vulpes Fox cushion . This Vegan Suede Cushion is hand-made by us, with stunning vibrant colours, and is super super soft! Perfect for the bedroom or living room. Thanks for supporting our artists and making a difference :)",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278501/foxcushion_arsjy8.jpg",
        location: "Valencia",
        price: 24.95,
        quantity: 10,
        material: "fabric",
        height: 40,
        depth: 15,
        width: 40,
        createdAt: "2020-08-24",
        updatedAt: "2020-08-24",
      },

      {
        user_id: user[0][1].id,
        category_id: category[0][0].id,
        title: "White Single Bed Frame",
        description:
          "Handmade metal bed frame for a single bed, white color. Very strong and sturdy, no noise, very good fit for a classic touch in the room.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278498/bedframe_tsnyh3.jpg",
        location: "Brighton",
        price: 120,
        quantity: 2,
        material: "metal",
        height: 60,
        depth: 200,
        width: 100,
        createdAt: "2020-07-23",
        updatedAt: "2020-08-23",
      },

      {
        user_id: user[0][2].id,
        category_id: category[0][0].id,
        title: "Handmade Wooden HeadBoard",
        description:
          "This exclusive headboard has been handcrafted with both new and recicled pine tree wood. Each piece is selected and treated with extreme care. It transforms your bedroom into a warm and original space with this sustainable and unique headboard",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278503/woodenheadboard_e4ehzg.jpg",
        location: "London",
        price: 250,
        quantity: 2,
        material: "wood",
        height: 65,
        depth: 10,
        width: 142,
        createdAt: "2020-07-10",
        updatedAt: "2020-07-10",
      },

      {
        user_id: user[0][3].id,
        category_id: category[0][0].id,
        title: "Desk Table",
        description:
          "Scandinavian look with a retro feel. Hairpin legs with Formica coated birch tabletop. The Formica finish gives a very hard-wearing and wipe clean surface. Suitable as an office desk or dining table for 4 people (small) or 6 people (large). Birch ply top finished with a robust formica top, FSC approved. A white formica top with wood effect trim. White hairpin legs",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278500/whitedesk_qfpx5g.jpg",
        location: "Barcelona",
        price: 125,
        quantity: 1,
        material: "wood",
        height: 100,
        depth: 50,
        width: 120,
        createdAt: "2020-08-21",
        updatedAt: "2020-08-21",
      },

      {
        user_id: user[0][1].id,
        category_id: category[0][0].id,
        title: "Wardrobe Set",
        description:
          "Price includes 3 pieces. This rustic bedroom open wardrobe brings a unique design to offer your room a modern feel whilst incorporating modern open storage. Wood effect finish. More product details: Metal outer frame, Hanging rail, Manufactured using particleboard, each item comes flat packed for self-assembly at home.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278501/blackwardrobe_qtvrqj.jpg",
        location: "London",
        price: 250,
        quantity: 1,
        material: "wood",
        height: 180,
        depth: 40,
        width: 210,
        createdAt: "2020-08-20",
        updatedAt: "2020-08-20",
      },

      {
        user_id: user[0][2].id,
        category_id: category[0][0].id,
        title: "Bedside table",
        description:
          "White bedside table, high quality wood that guarantees a long life, it has the perfect size for a lamp, an alarm clock and a book to be on top! Can be used also in offices or living rooms.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278499/bedsidetable_nrecnw.jpg",
        location: "London",
        price: 35,
        quantity: 4,
        material: "wood",
        height: 40,
        depth: 30,
        width: 40,
        createdAt: "2020-07-01",
        updatedAt: "2020-07-20",
      },

      {
        user_id: user[0][3].id,
        category_id: category[0][0].id,
        title: "Turkish Table Lamp",
        description:
          "This is a Handmade Turkish Moroccan Lamp, bought it in Istanbul. Mosaic glass pieces & beads are glued 1 by 1 on naked globes by hand. Gives a very colourful and exotic vibe to the room",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278503/turkishlamp_znkyyc.jpg",
        location: "Barcelona",
        price: 55,
        quantity: 1,
        material: "glass",
        height: 40,
        depth: 30,
        width: 30,
        createdAt: "2020-08-10",
        updatedAt: "2020-08-10",
      },

      {
        user_id: user[0][1].id,
        category_id: category[0][0].id,
        title: "Old Style Bedside Tables",
        description:
          "Two rustic bedside tables, belonged to my grandma's cottage house in the English countryside. They give a very warm feel to the bedroom.",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278499/oldbedsidetables_yvc8wt.jpg",
        location: "Brighton",
        price: 65,
        quantity: 0,
        material: "wood",
        height: 45,
        depth: 40,
        width: 40,
        createdAt: "2020-08-20",
        updatedAt: "2020-08-20",
      },
      {
        user_id: user[0][2].id,
        category_id: category[0][0].id,
        title: "Colourful Carpet",
        description:
          "Luxurious 100% wool runner, Contemporary design. Cotton canvas backing, soft and durable, perfect for any home. A grey base with yellow, blue, green, pink, orange and cream inserts",
        images: "https://res.cloudinary.com/furniss/image/upload/v1598278497/carpet_nbh1fb.jpg",
        location: "Barcelona",
        price: 35,
        quantity: 0,
        material: "fabric",
        height: 5,
        depth: 60,
        width: 230,
        createdAt: "2020-08-05",
        updatedAt: "2020-08-05",
      },
    ]);

    await queryInterface.bulkInsert("reviews", [
      {
        user_id: user[0][1].id,
        author_id: user[0][3].id,
        content: "The old style bedside table that I bought from Leo is amazing! Worth the money, and 100% would recommend buying from this seller",
        rating: 5
      },
      {
        user_id: user[0][2].id,
        author_id: user[0][1].id,
        content: "Quite slow delivery but product looked exactly like the picture, 10/10 would recommend buying from this seller",
        rating: 4
      },

    ]);
  },

  down: async (queryInterface) => {
    queryInterface.bulkDelete("users", null, {});
    queryInterface.bulkDelete("categories", null, {});
    queryInterface.bulkDelete("products", null, {});
    queryInterface.bulkDelete("reviews", null, {});
    queryInterface.bulkDelete("views", null, {});
  },

};
