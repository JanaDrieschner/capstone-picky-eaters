import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../components/Heading";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

export default function OwnRecipes({ newRecipe }) {
  const [recipesList, setRecipesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const router = useRouter();

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipesList(JSON.parse(storedRecipes));
    }
  }, []);

  const handleDeleteRecipe = (index) => {
    const newRecipes = [...recipesList];
    newRecipes.splice(index, 1);
    setRecipesList(newRecipes);
    localStorage.setItem("recipes", JSON.stringify(newRecipes));
  };

  const handleRecipeClick = (recipe) => {
    if (recipe.link) {
      router.push(
        `/myrecipes/${recipe.id}?link=${recipe.link}&title=${recipe.title}&category=${recipe.category}`
      );
    } else {
      router.push(`/recipes/${recipe.id}`);
    }
  };

  const filteredRecipes = recipesList.filter(
    (recipe) =>
      selectedCategory === "All" || recipe.category === selectedCategory
  );

  return (
    <>
      <Heading>My Recipes</Heading>

      <StyledArticle>
        <StyledSelect
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="Drink">Drink</option>
          <option value="Dessert">Dessert</option>
          <option value="Holiday">Holiday</option>
          <option value="Other">Other</option>
        </StyledSelect>

        {filteredRecipes.map((recipe, index) => (
          <StyledSection key={index}>
            <StyledButton onClick={() => handleRecipeClick(recipe)}>
              <a>{recipe.title}</a>
            </StyledButton>
            <StyledDeleteButton onClick={() => handleDeleteRecipe(index)}>
              <AiOutlineDelete />
            </StyledDeleteButton>
          </StyledSection>
        ))}
      </StyledArticle>
    </>
  );
}

const StyledSelect = styled.select`
  font-size: 16px;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  color: #0f5c64;
`;

const StyledArticle = styled.article`
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const StyledSection = styled.section`
  display: flex;
  align-itens: center;
  border: 3px ridge #0f5c64;
  background-color: #0f5c64;
  border-radius: 20px;
  justify-content: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  position: relative;

  margin-bottom: 6px;
  width: 70%;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 80px;
  box-shadow: 0 3px 8px rgba (0, 0, 0, 0.24);
  color: #f4f5f6;
  text-transform: uppercase;
  font-size: 16px;
  font-family: nunito, sans-serif;
  font-weight: 500;
`;

const StyledDeleteButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 0;
  color: #c35e64;
  background-color: transparent;

  border-radius: 50%;
  font-size: 30px;
  width: 25px;
  height: 25px;
  border: none;
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 10px;
  right: 10px;
  margin: 0;
  color: #f4f5f6;
  border-radius: 50%;
  font-size: 30px;
  width: 25px;
  height: 25px;
  border: none;
`;
