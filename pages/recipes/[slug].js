 /*// pages/recipes/[slug].js
import React from "react";
import Image from "next/image";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default function RecipePage({ slug }) {
  const { data: recipe } = useSWR(
    `https://api.spoonacular.com/recipes/${slug}/information?apiKey=YOUR_API_KEY`,
    fetcher
  );

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <Image src={recipe.image} alt={recipe.title} width={400} height={300} />
      <p>{recipe.summary}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  return {
    props: {
      slug,
    },
  };
}
