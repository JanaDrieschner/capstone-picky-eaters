import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";

export default function LinksHomepage() {
  const [userRecipes, setUserRecipes] = useState([]);
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Breakfast");
  const router = useRouter();

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes"));
    if (storedRecipes) {
      setUserRecipes(storedRecipes);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = { title, link };
    const updatedRecipes = [...userRecipes, newRecipe];

    setUserRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    setLink("");
    setTitle("");
    setCategory("Breakfast");
    router.push("/myrecipes");
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <StyledWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledTitle id="title-id" aria-labelledby="title-label">
            Add Recipe
          </StyledTitle>
          <StyledLabel htmlFor="link">Link</StyledLabel>

          <StyledInput
            id="link"
            type="text"
            name="link"
            value={link}
            onChange={handleLinkChange}
            required
          />

          <StyledLabel htmlFor="title">Title</StyledLabel>

          <StyledInput
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
            maxLength="30"
          />
          <StyledLabel htmlFor="category">Category</StyledLabel>
          <StyledSelect
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Drink">Drink</option>
            <option value="Dessert">Dessert</option>
            <option value="Holiday">Holiday</option>
            <option value="Other">Other</option>
          </StyledSelect>

          <StyledButton type="submit">
            <StyledIcon>
              <IoIosAddCircleOutline />
            </StyledIcon>
          </StyledButton>
        </StyledForm>

        <StyledLink href="/recipes/">Inspire Me</StyledLink>
      </StyledWrapper>
      <section>
        {userRecipes.map(
          (recipe, index) =>
            recipe.link && (
              <Link key={index} href={recipe.link}>
                {recipe.title}
              </Link>
            )
        )}
      </section>
    </>
  );
}

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledSelect = styled.select`
  padding: 5px;
`;

const StyledWrapper = styled.section`
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

const StyledLabel = styled.label`
  display: block;
  margin: 10px;
`;

const StyledInput = styled.input`
  display: block;
  margin: 8px;
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

const StyledTitle = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px;
  font-weight: normal;
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
