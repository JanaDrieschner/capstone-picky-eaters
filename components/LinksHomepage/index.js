import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function LinksHomepage() {
  return (
    <>
      <StyledWrapper>
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
