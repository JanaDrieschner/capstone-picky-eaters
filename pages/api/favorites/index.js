import dbConnect from "../../../db/connect";
import Recipe from "../../../db/models/Recipe";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const favorites = await Recipe.find();
    return response.status(200).json(Recipe);
  }

  if (request.method === "POST") {
    try {
      const recipeData = request.body;
      const recipe = new Favorite(Recipe.data);
      await recipe.save();

      response.status(201).json({ status: "Favorite recipe created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "PUT") {
    const favoriteToUpdate = await Favorite.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json(favoriteToUpdate);
  }
}
