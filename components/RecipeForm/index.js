import { useState } from "react";

export default function RecipeForm({ onSubmit, value }) {
  const [recipe, setRecipe] = useState(value);

  return (
    <form
      onSubmit={(event) => {
        onSubmit(event);
        setRecipe("");
      }}
    >
      <label htmlFor="recipe"></label>
      <input
        type="text"
        id="recipe"
        name="recipe"
        value={recipe}
        onChange={(event) => setRecipe(event.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}
