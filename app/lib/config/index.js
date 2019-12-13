// config.js
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  host: process.env.HOST || "af-connect.local",
  port: process.env.PORT || 3000,
  afPortabilityUrl:
    process.env.AF_PORTABILITY_URL || "https://af-connect.local:8080",
  afPortabilityApiKey:
    process.env.AF_PORTABILITY_API_KEY ||
    "dummydummydummydummydummydummydummydummydummydummy",
  afConnectUrl: process.env.AF_CONNECT_URL || "https://af-connect.local"
};
