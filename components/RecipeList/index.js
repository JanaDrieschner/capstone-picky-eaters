import React from "react";
import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";
import Heading from "../Heading";

function RefreshButton({ onRefetch }) {
  return (
    <StyledButton type="button" onClick={onRefetch}>
      I am picky
    </StyledButton>
  );
}

export default function RecipeListRandom({ recipes }) {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/spoonacular/recipes/random?number=20`
  );

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <>
      <Heading>New Ideas</Heading>

      <StyledContainer>
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
                <StyledImagePlaceholder>
                  Image not available
                </StyledImagePlaceholder>
              )}

              <Link href={`/recipes/${recipe.id}`}>
                <StyledTitle>{recipe.title}</StyledTitle>
              </Link>
            </StyledArticle>
          ))}

        <RefreshButton onRefetch={() => mutate()}>I am picky</RefreshButton>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid #BDC0BF;
  width: 70%;
  margin-left: 10px;
  box-sizing: border-box;
  margin-bottom: 7px;;
  border-radius: 20px;
  box-shadow: 0 3px 8px rgba (0, 0, 0, 0.24);
  background-color: #0f5c64;
  &:hover {
    background-color:#8DB9AA;
    box-shadow: 0px 15 px 20px FaRegIdBadge(13, 240, 252, 0.4);
    color: #86887b;
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
  box-shadow: 0px 8px 15px (rgba 0, 0, 0, 0.1);
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

const StyledImagePlaceholder = styled.div`
  color: #f4f5f6;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  word-wrap: break-word;
`;
