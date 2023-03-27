import React from "react";
import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";
import Heading from "../Heading";

function RefreshButton({ onRefetch }) {
  return (
    <button type="button" onClick={onRefetch}>
      I am picky
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
      <Heading>New Ideas</Heading>

      <StyledContainer>
        {data &&
          data.recipes &&
          data.recipes.map((recipe) => (
            <StyledArticle key={recipe.id}>
              <StyledImage
                src={recipe.image}
                alt={recipe.title}
                width={120}
                height={100}
              />

              <Link href={`/recipes/${recipe.id}`}>
                <StyledTitle>{recipe.title}</StyledTitle>
              </Link>
            </StyledArticle>
          ))}
      </StyledContainer>

      <StyledSection>
        <RefreshButton onRefetch={() => mutate()}>I am picky</RefreshButton>
      </StyledSection>
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
  border: 1px solid #ccc;
  width: calc(33.33% - 20px);
  box-sizing: border-box;
  margin-bottom: 7px;
  border-radius: 20px;
  box-shadow: 0 0 4px rgba (0, 0, 0, 0.4);
  background-color: #fff;
  &:hover {
    background-color:#8db9aa;
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

  color: black;
`;

const StyledImage = styled(Image)`
  border-radius: 20%;
  padding: 10px;
`;

const StyledSection = styled.section`
  padding: 80px;
`;
