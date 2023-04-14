import React, { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useRouter } from "next/router";
import Notes from "../Notes";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";

BsPlusCircle;

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
  const [category, setCategory] = useState("");

  const handleSaveRecipe = () => {
    const storedRecipes = localStorage.getItem("recipes");
    const newRecipes = storedRecipes ? JSON.parse(storedRecipes) : [];
    const importedRecipe = {
      ...recipe,
      category: category,
    };
    newRecipes.push(importedRecipe);
    localStorage.setItem("recipes", JSON.stringify(newRecipes));
    router.push("/myrecipes");
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
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
        <StyledSection>
          <StyledLink href="/recipes">
            <BsArrowLeftCircle />
          </StyledLink>

          <StyledSelect value={category} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Dessert">Dessert</option>
            <option value="Holiday">Lunch</option>
            <option value="Other">Other</option>
          </StyledSelect>

          <BsPlusCircle onClick={handleSaveRecipe} />
        </StyledSection>

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
        <Notes recipeId={recipe.id} />
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

const StyledSection = styled.section`
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  color: #0f5c64;
`;

const StyledLink = styled(Link)`
  background-color: 
  font-size: 45;
  color: #0f5c64;
`;

const StyledWrapper = styled.div`
  background-color: 
  font-size: 45;
  color: #0f5c64;


`;

const StyledSelect = styled.select`
  font-size: 16px;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;
