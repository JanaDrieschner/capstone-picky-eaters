import React from "react";
import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";

function RefreshButton({ onRefetch }) {
  return (
    <button type="button" onClick={onRefetch}>
      New Ideas
    </button>
  );
}

export default function RecipeListRandom({ recipes }) {
  const { data, error, isLoading, mutate } = useSWR(
    "https://api.spoonacular.com/recipes/random?number=20&apiKey=32464ab8841f4c0cb8f3b724eb191b0f"
  );

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <>
      <StyledButton>
        <RefreshButton onRefetch={() => mutate()}>New Ideas</RefreshButton>
      </StyledButton>
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
    </>
  );
}

const StyledButton = styled.button`
  background-color: red;
`;
