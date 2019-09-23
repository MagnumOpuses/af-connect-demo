// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  localPort: process.env.LOCAL_PORT || 443,
  pkey: process.env.PKEY || './cert_and_key/wc.arbetsformedlingen.se.key',
  sslcert: process.env.SSLCERT || './cert_and_key/wc.arbetsformedlingen.se.crt'
};
