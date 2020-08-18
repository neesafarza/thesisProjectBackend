'use strict';

const db = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

exports.create = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    req.body.password = hash;
    const [_, created] = await db.user.findOrCreate({ // TODO: handle case if the email is not used but the username is
      where: { email },
      defaults: req.body
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
    console.log("User couln't create a new account: ", e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.user.findOne({ where: { email } });
    const validatePass = await bcrypt.compare(password, user.password);
    if (!validatePass) throw new Error();
    const accessToken = jwt.sign({ email: user.email }, SECRET_KEY);
    res.status(200);
    res.json(accessToken);
  } catch (e) {
    res.status(401);
    res.send('User or password incorrect.');
  }
};

exports.getOne = async (req, res) => {
  try {
    const { user } = req;
    res.status(200);
    res.json(user);
  } catch (e) {
    console.error("Couldn't send to the user his own data:", e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.user;
    const { password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    req.body.password = hash;
    await db.user.update(req.body, {
      where: { id }
    });
    console.log('3');
    res.sendStatus(200);
  } catch (e) {
    console.error(`Coudn't update the personal data for user with id ${req.user.id}`, e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
};
