import styled from "styled-components";
import ReactPlayer from "react-player";
import Heading from "../Heading";

export default function OwnRecipeDetails() {
  return (
    <>
      <Heading>My Recipe</Heading>
      <StyledPlayer>
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=_VPpFU3Jyq4"
        />
      </StyledPlayer>
      <form>
        <StyledTextarea />
        <br /> <br />
        <StyledButton type="submit">safe</StyledButton>
      </form>
    </>
  );
}

const StyledPlayer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 2rem;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 30vh;
  margin-top: 5rem;
  font-family: nunito, sans-serif;
  display: block;
  padding: 1rem;
  box-sizing: border-box;
  resize: none;
  border: 5px solid #0f5c64;
  border-radius: 20px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  border-radius: 20px;
  background-color: #0f5c64;
  color: white;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px (rgba 0, 0, 0, 0.1);
  width: 20%;
  hight: 20px;
`;
