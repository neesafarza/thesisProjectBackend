'use strict';

const db = require('../models/index');

exports.getCategories = async (req, res) => {
  try {
    const categories = await db.category.findAll({});
    res.status(200);
    res.json(categories);
  } catch (e) {
    res.status(400)
    res.send(JSON.stringify(e))
  }
}