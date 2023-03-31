import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { HiLink } from "react-icons/hi";
import { useRouter } from "next/router";

import { useState } from "react";

export default function LinksHomepage() {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const router = useRouter();

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
    router.push("/links");
  };

  return (
    <>
      <StyledWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledTitle>
            <p>My Recipes</p>
          </StyledTitle>
          <label htmlFor="link">Link</label>
          <br />
          <input
            type="text"
            name="link"
            value={link}
            onChange={handleChange}
          />{" "}
          <StyledButton type="submit">Safe</StyledButton>
          <br /> <br />
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
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
  border-radius: 20px;
  background-color: #f4f5f5;
  color: #0f5c64;
  border: 1px solid #bdc0bf;
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
