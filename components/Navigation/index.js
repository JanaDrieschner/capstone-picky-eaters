import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdOutlineFoodBank } from "react-icons/md";

import Image from "next/image";

export default function Navigation({ children }) {
  const router = useRouter();
  return (
    <StyledFooter>
      <StyledList>
        <li>
          <StyledLink
            href="/"
            className={router.pathname === "/" ? "selected" : ""}
            aria-labelledby="home-label"
          >
            <BiHomeAlt2 />
          </StyledLink>
        </li>
        <li>
          <StyledLink
            href="/myrecipes"
            className={router.pathname === "/myrecipes" ? "selected" : ""}
            aria-labelledby="recipe-label"
          >
            <MdOutlineFoodBank />
          </StyledLink>
        </li>
      </StyledList>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: #f4f5f6;
  color: white;
  text-align: center;
  border: none;
  z-index: 1;
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
`;

const StyledLink = styled(Link)`
  font-size: 30px;
  padding: 10px 20px;
  color: #0f5c64;

  &.selected {
    color: #c35e64;
  }
`;
