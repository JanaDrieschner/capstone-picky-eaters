import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";
import Heading from "../../components/Heading";
import { AiOutlineDelete } from "react-icons/ai";

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

  const handleRecipeClick = (recipe) => {
    openLinkInNewTab(recipe.link);
  };

  const handleDeleteRecipe = (index) => {
    const newRecipes = [...recipes];
    newRecipes.splice(index, 1);
    setRecipes(newRecipes);
    localStorage.setItem("recipes", JSON.stringify(newRecipes));
  };

  return (
    <>
      <Heading>My Recipes</Heading>
      <StyledWrapper>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <StyledSection key={index}>
              <StyledButton onClick={() => handleRecipeClick(recipe)}>
                {recipe.title}
              </StyledButton>
              <StyledDeleteButton onClick={handleDeleteRecipe}>
                <AiOutlineDelete />
              </StyledDeleteButton>
            </StyledSection>
          ))
        ) : (
          <p>You have no saved recipes.</p>
        )}
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledSection = styled.section`

display: flex;
flex-direction: column;
border: 1px solid #BDC0BF;
width: 70%;
margin-left: 10px;
box-sizing: border-box;
margin-bottom: 7px;;
border-radius: 20px;
box-shadow: 0 3px 8px rgba (0, 0, 0, 0.24);
background-color: #0F4F5F6;
&:hover {
  background-color:#8DB9AA;
  box-shadow: 0px 15 px 20px FaRegIdBadge(13, 240, 252, 0.4);
  color: #86887b;
  transform: translateY(-7px);



`;

const StyledButton = styled.button`
display: flex;
  flex-direction: column;
  border: 1px solid #BDC0BF;
  width: 70%;
  margin-left: 10px;
  box-sizing: border-box;
  margin-bottom: 7px;;
  border-radius: 20px;
  box-shadow: 0 3px 8px rgba (0, 0, 0, 0.24);
  background-color: #0F4F5F6;
  &:hover {
    background-color:#8DB9AA;
    box-shadow: 0px 15 px 20px FaRegIdBadge(13, 240, 252, 0.4);
    color: #86887b;
    transform: translateY(-7px);

`;

const StyledDeleteButton = styled.button`
  display: inline-block;
  margin-left: 10px;
  background-color: #0f5c64;
  color: white;
  border-radius: 50%;
  font-size: 15px;
  width: 25px;
  height: 25px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ff6961;
  }
`;
