// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT || 3000,
  afLoginUrl: process.env.AF_LOGIN_URL || 'https://www.arbetsformedlingen.se/loggain',
  afJwtUrl: process.env.AF_JWT_URL || 'http://jwt.arbetsformedlingen.se/jwt/rest/idp/v0/klientID',
  afJwtHost: process.env.AF_JWT_HOST || 'jwt.arbetsformedlingen.se',
  portabilityUrl: process.env.PORTABILITY_URL || 'http://portability.stage.opservices.jtech.se/profile',
  portabilityHost: process.env.PORTABILITY_HOST || 'portability.stage.opservices.jtech.se',
  ssoCookieName: process.env.SSO_COOKIE_NAME || 'AMV_SSO_COOKIE'
};
