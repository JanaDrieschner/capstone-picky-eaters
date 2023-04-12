import React from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useRouter } from "next/router";
import Notes from "../Notes";

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

  const router = useRouter();

  const handleSaveRecipe = () => {
    const storedRecipes = localStorage.getItem("recipes");
    const newRecipes = storedRecipes ? JSON.parse(storedRecipes) : [];
    newRecipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(newRecipes));
    router.push("/myrecipes");
  };

  return (
    <>
      <StyledHeader />
      <StyledArticle>
        <StyledImage
          src={recipe.image}
          alt={recipe.title}
          width={190}
          height={170}
        />
        <Link href="/myrecipes">
          <StyledIcon>
            <IoIosAddCircleOutline onClick={handleSaveRecipe} />
          </StyledIcon>
        </Link>

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
        <Notes />
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

  border: 2px ridge black;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const StyledIcon = styled.div`
  font-size: 40px;
  display: flex;
  align-items: flex-end;

  color: #0f5c64;

  color: ;
`;
