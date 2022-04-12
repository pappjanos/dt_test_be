const express = require("express");
const cocktailRoute = require("./cocktail.route");

const router = express.Router();

// define server routes
const defaultRoutes = [
  {
    path: "/cocktail",
    route: cocktailRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
