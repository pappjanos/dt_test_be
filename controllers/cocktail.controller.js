const cocktailService = require("../services/cocktail.service");

//parse the ingredients based on indexes 1-16
const parseIngredients = (cocktail) => {
  const ing = [];
  for (let index = 1; index < 16; index++) {
    if (cocktail[`strIngredient${index}`]) {
      ing.push(
        `${cocktail[`strIngredient${index}`]} ${
          cocktail[`strMeasure${index}`] ? cocktail[`strMeasure${index}`] : ""
        }`
      );
    }
  }
  return ing;
};

// get cocktails from cocktail api based on query params if available in the request
const getCocktails = async (req, res) => {
  const { name, alcoholStatus } = req.query;
  // in case the query parameter contains name, then we search for the corresponding cocktail name and provide an array og object of cocktails
  let result;
  if (name) {
    try {
      result = await cocktailService.searchCocktailByName(name);
    } catch (error) {
      return res.sendStatus(error);
    }
  }
  // else we just give back a random cocktail object
  else {
    try {
      result = await cocktailService.getRandomCocktail();
    } catch (error) {
      return res.sendStatus(error);
    }
  }
  // map cocktail data needed for frontend
  const cocktails = result.data.drinks.map((cocktail) => {
    return {
      name: cocktail.strDrink,
      insttructions: cocktail.strInstructions,
      pic: cocktail.strDrinkThumb,
      alcohol: cocktail.strAlcoholic,
      ingredients: parseIngredients(cocktail),
    };
  });
  //filter by alcohol status and return json response
  return alcoholStatus
    ? res.status(200).json(
        cocktails.filter((item, index) => {
          return item.alcohol === alcoholStatus;
        })
      )
    : res.status(200).json(cocktails);
};

module.exports = {
  getCocktails,
};
