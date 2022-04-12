const cocktailService = require("../services/cocktail.service");

// get cocktails from cocktail api based on query params if available in the request
const getCocktails = async (req, res) => {
  const { name, isAlcoholic } = req.query;
  // in case the query parameter contains name, then we search for the corresponding cocktail name and provide an array og object of cocktails
  let result;
  if (name) {
    try {
      result = await cocktailService.searchCocktailByName(name);
      return res.status(200).json(result.data);
    } catch (error) {
      return res.sendStatus(error);
    }
  }
  // else we just give back a random cocktail object
  else {
    try {
      result = await cocktailService.getRandomCocktail();
      return res.status(200).json(result.data);
    } catch (error) {
      return res.sendStatus(error);
    }
  }
};

module.exports = {
  getCocktails,
};
