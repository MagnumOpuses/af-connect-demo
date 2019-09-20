// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT || 3000,
  localPort: process.env.LOCAL_PORT || 443,
  afLoginUrl: process.env.AF_LOGIN_URL || 'https://www.arbetsformedlingen.se/loggain',
  afJwtUrl: process.env.AF_JWT_URL || 'http://jwt.arbetsformedlingen.se/jwt/rest/idp/v0/klientID',
  afJwtHost: process.env.AF_JWT_HOST || 'jwt.arbetsformedlingen.se',
  portabilityUrl: process.env.PORTABILITY_URL || 'http://portability.stage.opservices.jtech.se/profile',
  portabilityHost: process.env.PORTABILITY_HOST || 'portability.stage.opservices.jtech.se',
  ssoCookieName: process.env.SSO_COOKIE_NAME || 'AMV_SSO_COOKIE',
  pkey: process.env.PKEY || './cert_and_key/wc.arbetsformedlingen.se.key',
  sslcert: process.env.SSLCERT || './cert_and_key/wc.arbetsformedlingen.se.crt'

};
