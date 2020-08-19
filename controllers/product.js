'use strict';

const models = require('../models');


exports.getAll = async (req, res) => {
  try {

  } catch (e) {
    console.error(e);   // eslint-disable-line no-console
  }
};

exports.create = async (req, res) => {
  try {

  } catch (e) {
    console.error(e);   // eslint-disable-line no-console
  }
};

exports.getOne = async (req, res) => {
  try {

  } catch (e) {
    console.error(e);   // eslint-disable-line no-console
  }
};

exports.update = async (req, res) => {
  try {

  } catch (e) {
    console.error(e);   // eslint-disable-line no-console
  }
};

exports.getAllByCategoryId = async (req, res) => {

  const categoryId = req.params.id;

  try {
    if(!categoryId) {
      res.status(400).send('no id')
    }
    await models.products.findAll({
      where: {
        category_id: categoryId
      }
    }
    ).then(products => {
      res.setHeader('content-type', 'application/json');
      return res.status(200).send(JSON.stringify(products))
    })
  } catch (e) {
    console.error(e)
    res.status(400).send(JSON.stringify(e))
  }
}
