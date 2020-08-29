'use strict';

const db = require('../models/index');
const createProduct = require('../services/productService');


exports.create = async (req, res) => {
  try {
    const createdProduct = await createProduct(req);
    res.status(201);
    res.json(createdProduct);
  } catch (e) {
    console.error(`Couldn't create a product: `, e);   // eslint-disable-line no-console
    res.status(400)
    res.send(JSON.stringify(e))
  }
};

exports.getAll = async (req, res) => {
  try {
    const products = await db.product.findAndCountAll({
      where: req.query
    });
    res.status(200);
    res.json(products);
  } catch (e) {
    console.error(`Couldn't send the products to a user: `, e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.update = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { id } = req.params;
    const updatedProduct = await db.product.update(req.body, {
      where: {
        id,
        user_id,
      }
    });
    if (updatedProduct) {
      res.status(200);
      res.json(updatedProduct);
    } else {
      res.status(401);
      res.send("You aren't allowed to edit products that are not yours!");
    }
  } catch (e) {
    console.error(`Coudn't update the product data for user with id ${req.user.id}: `, e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await db.product.findOne({
      where: { id }
    });
    const isTheOwner = product.user_id === req.user.id;
    if (isTheOwner) {
      product.destroy();
      res.status(200);
      res.send("Product deleted");
    } else {
      res.status(401);
      res.send("You aren't allowed to delete products that are not yours!");
    }
  } catch (e) {
    console.error(`Coudn't delete the product data for user with id ${req.user.id}: `, e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};
