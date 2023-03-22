import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function LinksHomepage() {
  return (
    <>
      <Link href="/recipes/">
        <StyledLinkButton> Inspire Me</StyledLinkButton>
      </Link>

      <Link href="/">
        <button>URL</button>
      </Link>
    </>
  );
}

const StyledLinkButton = styled.a`
  background-color: #e8eceb;
  border: 0.25em ridge black;
  border-radius: 2em;

  text-align: center;

  padding: 12px 8px;
`;
