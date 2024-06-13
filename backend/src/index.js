import express from "express";
import cors from "cors";

import * as RecipeApi from "./recipe-api.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipe/search", async (req, res) => {
  const searchTerm = req.query.searchTerm;
  const page = parseInt(req.query.page);

  const results = await RecipeApi.searchRecipes(searchTerm, page);
  return res.json(results);
});

app.listen(5000, () => {
  console.log("Server running on localhost:5000");
});
