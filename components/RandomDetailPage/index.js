import React from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";

export default function RandomDetailPage({ recipe }) {
  const {
    id,
    title,
    image,
    readyInMinutes,
    instructions,
    servings,
    extendedIngredients,
  } = recipe;

  const filteredInstructions = instructions.replace(
    /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi,
    ""
  );

  return (
    <>
      <article>
        <h2>{title}</h2>

        <Image src={recipe.image} alt={recipe.title} width={400} height={300} />

        <p>Ready in {readyInMinutes} minutes</p>
        <p> Servings: {servings}</p>

        <h3>Ingredients</h3>
        <ul>
          {extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h3>Cooking Steps:</h3>
        <p> {filteredInstructions}</p>
      </article>
    </>
  );
}
