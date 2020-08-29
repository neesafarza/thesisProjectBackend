const dotenv = require('dotenv');
const { defaults } = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js'],
  setupFilesAfterEnv: ['./jest.setup.js']
};

dotenv.config();