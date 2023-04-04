import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { IoIosAddCircleOutline } from "react-icons/io";

import { useRouter } from "next/router";

import { useState, useEffect } from "react";

export default function LinksHomepage() {
  const [recipes, setRecipes] = useState([]);
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes"));
    if (storedRecipes) {
      setRecipes(storedRecipes);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = { title, link };
    const updatedRecipes = [...recipes, newRecipe];

    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    setLink("");
    setTitle("");
    router.push("/myrecipes");
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <StyledWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledTitle>
            <p>Add Recipe</p>
          </StyledTitle>
          <label htmlFor="link">Link</label>
          <br />
          <input
            type="text"
            name="link"
            value={link}
            onChange={handleLinkChange}
            required
          />
          <br /> <br />
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
            maxlength="30"
          />
          <StyledButton type="submit">
            <StyledIcon>
              <IoIosAddCircleOutline />
            </StyledIcon>
          </StyledButton>
        </StyledForm>

        <StyledLink href="/recipes/">Inspire Me</StyledLink>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  margin-top: -25px;
`;

const StyledForm = styled.form`

text-decoration: none;
  padding 1.3em 3em;
  white-space: nowrap;
  margin: 7px;
  text-transform: uppercase;
  font-weight: 500;
  
  color: #F4F5F6;
  background-color:  #0F5C64;     
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
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  padding-left: 100px;

  border-radius: 20px;
  background-color: #0f5c64;
  color: #0f5c64;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px (rgba 0, 0, 0, 0.1);
  width: 30%;
`;
const StyledTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
`;

const StyledLink = styled(Link)`
text-decoration: none;
  padding 1.3em 3em;
  white-space: nowrap;
  margin: 10px;
  text-transform: uppercase;
  font-weight: 500;
  
  color: #F4F5F6;
  background-color:  #0F5C64;     
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

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-size: 30px;
  color: #f4f5f6;
`;
