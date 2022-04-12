const axios = require("axios");
const config = require("../config/config");

const searchCocktailByName = async (name) => {
  return await axios.get(`${config.cocktailSearchApi}${name}`);
};

const getRandomCocktail = async () => {
  return await axios.get(config.cocktailRandomApi);
};

const filterByAlcohol = async (isAlcoholic) => {
  // return await axios.get(
  //   config.cocktailFilterApi + isAlcoholic ? "Alcoholic" : "Non_Alcoholic"
  // );
  return await axios.get(
    `${config.cocktailFilterApi}${isAlcoholic ? "Alcoholic" : "Non_Alcoholic"}`
  );
};

module.exports = {
  searchCocktailByName,
  getRandomCocktail,
  filterByAlcohol,
};
