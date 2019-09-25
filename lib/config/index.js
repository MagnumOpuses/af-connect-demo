// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
};
