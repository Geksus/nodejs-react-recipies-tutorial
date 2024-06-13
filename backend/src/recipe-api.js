import { config } from "dotenv";

const API_KEY = config().parsed.API_KEY;

export const searchRecipes = async (searchTerm, page) => {
  if (!API_KEY) {
    throw new Error("API key not found");
  }

  const baseURL = "https://api.spoonacular.com/recipes/complexSearch";
  const url = new URL(baseURL);

  const queryParams = {
    apiKey: API_KEY,
    query: searchTerm,
    number: 10,
    offset: (page - 1) * 10,
  };

  url.search = new URLSearchParams(queryParams).toString();

  try {
    const searchResponse = await fetch(url.toString());
    return await searchResponse.json();
  } catch (error) {
    console.log(error);
  }
};
