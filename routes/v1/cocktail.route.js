const express = require("express");
const cocktailController = require("../../controllers/cocktail.controller");
const router = express.Router();

router
  // .post("/blog-entry", blogController.addBlogEntry)
  // .delete("/blog-entry", blogController.deleteBlogEntry)
  .get("", cocktailController.getCocktails);
// .patch("/blog-entry", blogController.patchBlogEntry)
// .get("/blog-entry/:id", blogController.getBlogEntry);

module.exports = router;
