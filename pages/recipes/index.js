import RecipeList from "../../components/RecipeList";

export default function Recipes({ id }) {
  async function handleCreateRecipe(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const recipeData = Object.fromEntries(formData);

    const response = await fetch("api/recipes", {
      method: "POST",
      body: JSON.stringify(recipeData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return <RecipeList recipe={id} />;
}
