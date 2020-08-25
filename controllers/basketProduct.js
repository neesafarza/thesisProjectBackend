'use strict';

const db = require('../models/index');

exports.create = async (req, res) => {
  try {
    const product_id = req.params.id;
    const user_id = req.user.id;
    const { basket_quantity } = req.body;
    await db.basketProduct.create({
      user_id,
      product_id,
      basket_quantity,
    });
    res.status(201);
    res.send('Product saved on your basket!');
  } catch (e) {
    console.error(`There was an error when trying to process a user payment, user id: ${req.user.id}.`, e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.getAll = async (req, res) => {
  const user_id = req.user.id;
  try {
    const basketProducts = await db.basketProduct.findAll({
      where: {
        user_id,
      }
    });
    const products = [];
    for (let i = 0; i < basketProducts.length; i++) {
      const product = await db.product.findOne({
        where: {
          id: basketProducts[i].product_id,
        }
      });
      product.quantity = basketProducts[i].basket_quantity;
      products.push(product);
    }
    res.status(200);
    res.json(products);
  } catch (e) {
    console.error(`Couldn't send the basket products to a user id: ${req.user.id}.`, e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.delete = async (req, res) => {
  try {
    const product_id = req.params.id;
    const user_id = req.user.id;
    const basketProduct = await db.basketProduct.findOne({
      where: {
        user_id,
        product_id,
      }
    });
    basketProduct.destroy();
    res.status(200);
    res.send("Product deleted of your basket");
  } catch (e) {
    console.error(`Coudn't delete the basket product for user with id ${req.user.id}: `, e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.updateQuantity = async (req, res) => {
  try {
    const product_id = req.params.id;
    const user_id = req.user.id;
    const { basket_quantity } = req.body;
    await db.basketProduct.update({
      basket_quantity,
    }, {
      where: {
        user_id,
        product_id,
      }
    });
    res.status(200);
    res.send("Basket product quantity updated");
  } catch (e) {
    console.error(`Coudn't update the basket product quantity for user with id ${req.user.id}: `, e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};
