import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function LinksHomepage() {
  return (
    <>
      <StyledLink href="/recipes/">Inspire Me</StyledLink>

      <Link href="/">
        <button>URL</button>
      </Link>
    </>
  );
}

const StyledLink = styled(Link)`



  padding 1.3em 3em;
  font-size: 12px;
  margin: 28px;
  text-transform: uppercase;
  font-weight:500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px (rgba 0,0,0,0.1);
  transition: all 0.3s ease 0s;
  &:hover {
    background-color: #13fa;
box-shadow: 0px 15 px 20px FaRegIdBadge(13,240, 252, 0.4);
color: #fff;
transform: translateY(-7px);

  }

`;
