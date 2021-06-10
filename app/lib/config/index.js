// config.js
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  companyName: process.env.COMPANY_NAME || "default-company",
  jobTitle: process.env.JOB_TITLE || "default-job",
  host: process.env.HOST || "af-connect.local",
  port: process.env.PORT || 3000,
  healthPort: process.env.HEALTH_PORT || 9800,
  afPortabilityUrl:
    process.env.AF_PORTABILITY_URL || "https://af-connect.local:8080",
  afPortabilityApiKey:
    process.env.AF_PORTABILITY_API_KEY ||
    "dummydummydummydummydummydummydummydummydummydummy",
  afConnectUrl: process.env.AF_CONNECT_URL || "https://af-connect.local"
};
