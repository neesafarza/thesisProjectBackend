'use strict';

const db = require('../models/index');
const { sendEmailToBuyer } = require('../services/sendEmail');
const { sendEmailToSeller } = require('../services/sendEmail');

exports.create = async (req, res) => {
  try {
    const user_id = req.user.id;
    const product = req.body;
    const boughtProductId = product.id;
    delete product.id;
    const purchasedProduct = await db.purchase.create({
      ...product,
      buyer_id: user_id,
      seller_id: product.user_id,
      purchased_quantity: product.basket_quantity,
    });
    const seller = await getSellerData(product.user_id);
    sendEmailToBuyer(req.user.email, purchasedProduct);
    sendEmailToSeller(seller.dataValues.email, purchasedProduct);
    await db.product.decrement('quantity', {
      by: purchasedProduct.purchased_quantity,
      where: {
        id: boughtProductId,
      }
    });
    res.status(201);
    res.send('Product added on purchases history');
  } catch (e) {
    console.error(`There was an error when trying to process a user purchase, user id: ${req.user.id}`, e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.getAllPurchases = async (req, res) => {
  const user_id = req.user.id;
  try {
    const purchases = await db.purchase.findAll({
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

exports.getAllSales = async (req, res) => {
  const user_id = req.user.id;
  try {
    const purchases = await db.purchase.findAll({
      where: {
        seller_id: user_id,
      }
    });
    res.status(200);
    res.json(purchases);
  } catch (e) {
    console.error(`Couldn't send the purchased products to a user id: ${req.user.id} `, e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

async function getSellerData (id) {
  const seller = await db.user.findOne({
    where: {
      id,
    }
  });
  return seller;
}