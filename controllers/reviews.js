'use strict';

const db = require('../models/index');

exports.create = async (req, res) => {
  try {
    const review = await db.review.create({
      ...req.body,
    });
    res.status(201);
    res.json(review)
  } catch (error) {
    console.error(error)
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await db.review.findAll({});
    res.status(200);
    res.json(reviews);
  } catch (error) {
    res.status(400);
    console.error(error);
  }
}