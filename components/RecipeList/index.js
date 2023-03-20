import React from "react";
import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function RecipeListRandom() {
  const { data, error, isLoading } = useSWR(
    "https://api.spoonacular.com/recipes/random?number=20&apiKey=32464ab8841f4c0cb8f3b724eb191b0f",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      {data.map((recipe) => (
        <div key={recipe.id}>
          <Link href={`/recipes/${recipe.id}`}>
            <h2>{recipe.title}</h2>
          </Link>

          <Image
            src={recipe.image}
            alt={recipe.title}
            width={400}
            height={300}
          />
        </div>
      ))}
    </div>
  );
}
