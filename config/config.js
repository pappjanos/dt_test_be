const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "../.env") });

module.exports = {
  // define environment here (test, dev, prod)
  env: process.env.NODE_ENV,
  // define server port here
  port: process.env.PORT,
  // define outer api endpoints
  cocktailSearchApi: process.env.COCKTAIL_SEARCH_API,
  cocktailFilterApi: process.env.COCKTAIL_FILTER_API,
  cocktailRandomApi: process.env.COCKTAIL_RANDOM_API,
};
