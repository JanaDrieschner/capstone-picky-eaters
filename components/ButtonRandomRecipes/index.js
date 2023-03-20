import React from "react";
import styled from "styled-components";

export default function ButtonRandomRecipes() {
  return (
    <StyledButton>
      <button>Inspire Me</button>;
    </StyledButton>
  );
}

const StyledButton = styled.button`
  color: red;
`;
