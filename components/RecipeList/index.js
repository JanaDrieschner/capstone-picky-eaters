import React from "react";
import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function RefreshButton({ onRefetch }) {
  return (
    <button type="button" onClick={onRefetch}>
      New Ideas
    </button>
  );
}

export default function RecipeListRandom({ recipes }) {
  const { data, error, isLoading, mutate } = useSWR(
    "https://api.spoonacular.com/recipes/random?number=20&apiKey=32464ab8841f4c0cb8f3b724eb191b0f",
    fetcher
  );

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <>
      {data.recipes.map((recipe) => (
        <article key={recipe.id}>
          <Link href={`/recipes/${recipe.id}`}>
            <h2>{recipe.title}</h2>
          </Link>

          <Image
            src={recipe.image}
            alt={recipe.title}
            width={400}
            height={300}
          />
        </article>
      ))}

      <section>
        <RefreshButton onRefetch={() => mutate()}>New Ideas</RefreshButton>
      </section>
    </>
  );
}
