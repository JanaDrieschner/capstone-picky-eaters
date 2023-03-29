import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  isfavorite: { type: Boolean, required: true },
  notes: { type: String },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
