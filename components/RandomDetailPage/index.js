import React from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

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
      <StyledHeader />
      <StyledArticle>
        <StyledImage
          src={recipe.image}
          alt={recipe.title}
          width={200}
          height={150}
        />

        <h3>{recipe.title}</h3>

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
      </StyledArticle>
    </>
  );
}

const StyledHeader = styled.header`
  position: relative;
  z-index: 1;
`;

const StyledArticle = styled.article`
  width: 100%;
  padding: 16px;
  margin-top: 40%;
  margin-bottom: 20%;
  color: #0d0e0b;
`;

const StyledImage = styled(Image)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  border: 1px ridge black;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;
