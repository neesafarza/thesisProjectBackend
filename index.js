'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const publicRouter = require('./routers/public-router');
const privateRouter = require('./routers/private-router');
// const { sequelize } = require('./models/index');
const PORT = process.env.SERVER_PORT;
const URL = process.env.SERVER_URL;

app.use(express.json());

app.use(publicRouter);
// TODO: add authorization middleware
app.use(privateRouter);

(async () => {
  try {
    // await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server running at ${URL}:${PORT} 🚀`); // eslint-disable-line no-console
    });
  } catch (e) {
    console.error('Error connecting to the db 😢', e);   // eslint-disable-line no-console
  }
})();
