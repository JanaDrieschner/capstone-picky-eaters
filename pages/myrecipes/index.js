import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function OwnRecipes() {
  const [recipes, setRecipes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  const openLinkInNewTab = (link) => {
    window.open(link, "_blank");
  };

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <>
      <h2>Your Saved Recipes</h2>
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <section key={index}>
            <button onClick={() => openLinkInNewTab(recipe.link)}>
              {recipe.title}
            </button>
          </section>
        ))
      ) : (
        <p>You have no saved recipes.</p>
      )}
    </>
  );
}
