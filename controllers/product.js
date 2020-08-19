'use strict';

const db = require('../models/index');

exports.create = async (req, res) => {
  try {
    const product = await db.product.create({
      ...req.body,
      user_id: req.user.id
    });
    res.status(201);
    res.json(product);
  } catch (e) {
    console.error(`Couldn't create a product: `, e);   // eslint-disable-line no-console
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
    const { id } = req.params;
    const product = await db.product.findOne({
      where: { id }
    });
    const isTheOwner = product.user_id === req.user.id;
    if (isTheOwner) {
      const updatedProduct = await db.product.update({
        ...req.body,
        user_id: product.user_id
      }, {
        where: { id }
      });
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
