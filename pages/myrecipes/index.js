import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../components/Heading";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

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
    if (typeof window !== "undefined") {
      window.open(link, "_blank");
    }
  };

  const handleDeleteRecipe = (index) => {
    const newRecipes = [...recipes];
    newRecipes.splice(index, 1);
    setRecipes(newRecipes);
    localStorage.setItem("recipes", JSON.stringify(newRecipes));
  };

  const handleRecipeClick = (recipe) => {
    if (recipe.link) {
      openLinkInNewTab(recipe.link);
    } else {
      router.push(`/recipes/${recipe.id}`);
    }
  };

  return (
    <>
      <Heading>My Recipes</Heading>
      <StyledArticle>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <StyledSection key={index}>
              <StyledButton onClick={() => handleRecipeClick(recipe)}>
                <a>{recipe.title}</a>
              </StyledButton>
              <StyledDeleteButton onClick={() => handleDeleteRecipe(index)}>
                <AiOutlineDelete />
              </StyledDeleteButton>

              <StyledLink
                href={recipe.link ? recipe.link : `/recipes/${recipe.id}`}
              >
                <BsArrowRightCircle />
              </StyledLink>
            </StyledSection>
          ))
        ) : (
          <p>You have no saved recipes.</p>
        )}
      </StyledArticle>
    </>
  );
}

const StyledArticle = styled.article`
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledSection = styled.section`
  display: flex;
  align-itens: center;
  border: 3px ridge black;
  background-color: #0f5c64;
  border-radius: 20px;
  justify-content: center;
  position: relative;
  padding-right: 40px;
  margin-bottom: 6px;
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
