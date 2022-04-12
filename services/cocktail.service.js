const axios = require("axios");
const config = require("../config/config");

const searchCocktailByName = async (name) => {
  try {
    return await axios.get(`${config.cocktailSearchApi}${name}`);
  } catch (error) {
    throw error.response.status;
  }
};

const getRandomCocktail = async () => {
  try {
    return await axios.get(config.cocktailRandomApi);
  } catch (error) {
    throw error.response.status;
  }
};

const filterByAlcohol = async (isAlcoholic) => {
  // return await axios.get(
  //   config.cocktailFilterApi + isAlcoholic ? "Alcoholic" : "Non_Alcoholic"
  // );
  try {
    return await axios.get(
      `${config.cocktailFilterApi}${
        isAlcoholic ? "Alcoholic" : "Non_Alcoholic"
      }`
    );
  } catch (error) {
    throw error.response.status;
  }
};

module.exports = {
  searchCocktailByName,
  getRandomCocktail,
  filterByAlcohol,
};
