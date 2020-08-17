'use strict';

// const User = require('../models/User');  to add when the model is created
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

exports.create = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    req.body.password = hash;
    const [created] = await User.findOrCreate({ // TODO: handle case if the email is not used but the username is
      where: { email },
      default: req.body
    });
    if (created) {
      const accessToken = jwt.sign({ email }, SECRET_KEY);
      res.status(201);
      res.json(accessToken);
    } else {
      res.status(409);
      res.json('Email is already used');
    }
  } catch (e) {
    res.sendStatus(500)
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    const validatePass = await bcrypt.compare(password, user.password);
    if (!validatePass) throw new Error();

    const accessToken = jwt.sign({ email: user.email }, SECRET_KEY);
    res.status(200);
    res.json(accessToken);
  } catch (e) {
    res.sendStatus(500);
  }
}

exports.getOne = async (req, res) => {
  try {
    const { user } = req;   // get the user data from authMiddleware
    res.status(200);
    res.json(user);
  } catch (e) {
    console.error("Couldn't send to the user his own data:", e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
}

exports.update = async (req, res) => {
  try {
    const { id } = req.user;   // get the user data from authMiddleware
    await User.update({ id: id }, { where: req.body });
    res.status(200);
  } catch (e) {
    console.error(e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
}
