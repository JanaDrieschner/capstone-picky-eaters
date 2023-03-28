import dbConnect from "../../../db/connect";
import Favorite from "../../../db/models/Favorite";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const recipes = await Favorite.find();
    return response.status(200).json(recipes);
  }

  if (request.method === "POST") {
    try {
      const recipeData = request.body;
      const recipe = new Favorite(favoriteData);
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
