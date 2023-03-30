import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { HiLink } from "react-icons/hi";
import CreateOwnRecipe from "../OwnRecipeForm";
import { useState } from "react";
import Modal from "../Modal";

export default function LinksHomepage() {
  /*const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  /*<StyledNextLink onClick={handleAddRecipe}>
  Add my Recipes <HiLink />
</StyledNextLink>*/

  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "link") {
      setLink(value);
    } else if (name === "title") {
      setTitle(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <>
      <StyledWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="link">Link</label>
          <input
            type="text"
            name="link"
            value={link}
            onChange={handleChange}
          />{" "}
          <br /> <br />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <button type="submit">Safe</button>
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

const StyledForm = styled.form`

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
