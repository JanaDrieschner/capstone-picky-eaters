import React from "react";
import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";
import Heading from "../Heading";
import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const mealTypes = [
  "main course",
  "side dish",
  "dessert",
  "appetizer",
  "salad",
  "bread",
  "breakfast",
  "soup",
  "beverage",
  "sauce",
  "marinade",
  "fingerfood",
  "snack",
  "drink",
];

function RefreshButton({ onRefetch }) {
  return (
    <StyledButton type="button" onClick={onRefetch}>
      I am picky
    </StyledButton>
  );
}

export default function RecipeListRandom({ recipes }) {
  const [selectedMealType, setSelectedMealType] = useState("");

  const { data, error, isLoading, mutate } = useSWR(
    `/api/spoonacular/recipes/random?number=20&tags=${selectedMealType}`
  );

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  const handleMealType = (event) => {
    setSelectedMealType(event.target.value);
  };

  return (
    <>
      <Heading>New Ideas</Heading>
      <StyledContainer>
        <StyledSection>
          <StyledLabel htmlFor="mealType">Food cravings</StyledLabel>

          <StyledSelect
            id="mealType"
            value={selectedMealType}
            onChange={handleMealType}
          >
            <option value="">Just Pick</option>
            {mealTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </StyledSelect>
        </StyledSection>

        {data &&
          data.recipes &&
          data.recipes.map((recipe) => (
            <StyledArticle key={recipe.id}>
              {recipe.image ? (
                <StyledImage
                  src={recipe.image}
                  alt={recipe.title}
                  width={150}
                  height={130}
                />
              ) : (
                <StyledPlaceholder>Image is not available</StyledPlaceholder>
              )}

              <StyledLink href={`/recipes/${recipe.id}`}>
                <BsArrowRightCircle />
              </StyledLink>
              <StyledTitle>{recipe.title}</StyledTitle>
            </StyledArticle>
          ))}

        <RefreshButton onRefetch={() => mutate()}>I am picky</RefreshButton>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.section`
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const StyledArticle = styled.article`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around
  border: 3px ridge #0f5c64;
  width: 70%;
  margin-left: 10px;
  box-sizing: border-box;
  margin-bottom: 7px;;
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  background-color: #0f5c64;
  text-align: center;
  &:hover {
    background-color:#e7eeef;
    
    
    box-shadow: 0px 15 px 20px FaRegIdBadge(13, 240, 252, 0.4);
    color: #266c73
    transform: translateY(-7px);
`;

const StyledTitle = styled.h2`
  margin-top: 8px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  word-wrap: break-word;
  color: white;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
`;

const StyledImage = styled(Image)`
  border-radius: 20%;
  padding: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const StyledButton = styled.button`
text-decoration: none;
padding 1.3em 3em;
white-space: nowrap;
margin: 10px;
text-transform: uppercase;
font-size: 15px;
font-weight: 500;
color: #F4F5F6;
background-color: #0F5C64;
border: 1px ridge #BDC0BF;
border-radius: 45px;
box-shadow: 0px 8px 15px (rgba 0, 0, 0, 0.1);
transition: all 0.3s ease 0s;
&:hover {
  background-color: #0f5c64;
  box-shadow: 0px 15 px 20px FaRegIdBadge(13, 240, 252, 0.4);
  color: #86887b;
  transform: translateY(-7px);

}

  
`;

const StyledPlaceholder = styled.p`
  color: #f4f5f6;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  word-wrap: break-word;
  margin-left: 15px;
  margin-top: 10px;
`;

const StyledLink = styled(Link)`
  color: white;
  margin: 15px;
  font-size: 30px;

  position: absolute;
  top: 0;
  right: 0;
`;

const StyledSection = styled.section`

margin-left: 10px;
  margin-top: 5px;
  padding 1.3em 3em;
white-space: nowrap;
margin: 10px;
text-transform: uppercase;
font-size: 15px;
font-weight: 500;
color: #F4F5F6;
background-color: #0F5C64;
border: 1px ridge #BDC0BF;
border-radius: 45px;
box-shadow: 0px 8px 15px (rgba 0, 0, 0, 0.1);
transition: all 0.3s ease 0s;
&:hover {
  background-color: #0f5c64;
  box-shadow: 0px 15 px 20px FaRegIdBadge(13, 240, 252, 0.4);
  color: #86887b;
  transform: translateY(-7px);
 
`;

const StyledLabel = styled.label`
  font-size: 16px;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
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
