'use strict';

const db = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

exports.create = async (req, res) => {
  try {
    const { email, password, username, name, lastname, telephone, address, birthdate, gender } = req.body;
    const hash = await bcrypt.hash(password, 10);
    req.body.password = hash;
    console.log('req.body: ', req.body);
    const [user2, created] = await db.user.findOrCreate({ // TODO: handle case if the email is not used but the username is
      where: { email },
      defaults: { username, password, name, lastname, telephone, address, birthdate, gender }
    });
    console.log('user2:', user2);
    console.log('NO ERROR!!')
    console.log(created);
    if (created) {
      const accessToken = jwt.sign({ email }, SECRET_KEY);
      res.status(201);
      res.json(accessToken);
    } else {
      res.status(409);
      res.json('Email is already used');
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500)
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('email:', email);
    console.log('password:', password);
    const user = await db.User.findOne({ where: { email } });
    console.log('User: ', user);
    const validatePass = await bcrypt.compare(password, user.password);
    if (!validatePass) throw new Error();

    const accessToken = jwt.sign({ email: user.email }, SECRET_KEY);
    res.status(200);
    res.json(accessToken);
  } catch (e) {
    console.log(e);
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
    await db.User.update({ id: id }, { where: req.body });
    res.status(200);
  } catch (e) {
    console.error(e);   // eslint-disable-line no-console
    res.sendStatus(500);
  }
}
