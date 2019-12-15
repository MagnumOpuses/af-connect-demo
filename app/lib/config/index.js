// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  portabilityUrl: process.env.PORTABILITY_URL || 'https://localhost:8080'
};
