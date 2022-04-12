const express = require("express");
const cocktailController = require("../../controllers/cocktail.controller");
const router = express.Router();

// used routes for cocktail api
router.get("", cocktailController.getCocktails);

module.exports = router;
