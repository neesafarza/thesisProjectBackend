'use strict';

const db = require('../models/index');

exports.create = async (req, res) => {
  try {
    const user_id = req.user.id;
    const basketProducts = await db.basketProduct.findAll({
      where: {
        user_id,
      }
    });
    const products = [];
    for (let i = 0; i < basketProducts.length; i++) {
      const product = await db.product.findOne({
        where: {
          id: basketProducts[i].id,
        }
      });
      products.push(product.dataValues);
    }
    let amountToPay = 0;
    products.forEach(product => amountToPay += product.price)
    const promises = basketProducts.map(basketProduct => db.purchase.create(basketProduct));
    await Promise.all(promises);
    res.status(201);
    res.send('Congratulations! You purchase was succesfuly proseced!');
  } catch (e) {
    console.error(`There was an error when trying to process a user purchase, user id: ${req.user.id}`, e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.getAll = async (req, res) => {
  const user_id = req.user.id;
  try {
    const purchases = await db.purchase.findAndCountAll({
      where: {
        user_id,
      }
    });
    res.status(200);
    res.json(purchases);
  } catch (e) {
    console.error(`Couldn't send the purchased products to a user id: ${req.user.id} `, e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};
