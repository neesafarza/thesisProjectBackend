'use strict';

const db = require('../models/index');

exports.create = async (req, res) => {
  try {
    const user_id = req.user.id;
    const purchasedProduct = req.body;
    delete req.body.id;
    await db.purchase.create({
      ...req.body,
      buyer_id: user_id,
      seller_id: purchasedProduct.user_id,
    });
    res.status(201);
    res.send('Product added on purchases history');
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
        buyer_id: user_id,
      }
    });
    res.status(200);
    res.json(purchases);
  } catch (e) {
    console.error(`Couldn't send the purchased products to a user id: ${req.user.id} `, e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};
