import styled from "styled-components";
import ReactPlayer from "react-player";

export default function OwnRecipeDetails() {
  return (
    <>
      <StyledPlayer>
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=_VPpFU3Jyq4"
        />
      </StyledPlayer>
      <form>
        <textarea />
        <br /> <br />
        <button type="submit">safe</button>
      </form>
    </>
  );
}

const StyledPlayer = styled.div`
  width: 80%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  max-width: 100%;
  min-width: 100%;
`;
