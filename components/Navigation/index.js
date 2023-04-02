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
          <StyledLink href="/">
            <BiHomeAlt2 />
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/myrecipes">
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
  border: 3px groove #86887b;
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  font-size: 30px;
  pading: 10px 25px;
`;
