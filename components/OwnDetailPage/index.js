import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import Heading from "../Heading";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import Link from "next/link";

export default function OwnRecipeDetails({ url }) {
  const [note, setNote, isNoteSaved, setIsNoteSaved] = useLocalStorageState(
    "note",
    ""
  );
  const router = useRouter();
  const { link } = router.query;

  const handleChange = (event) => {
    setNote(event.target.value);
    setIsNoteSaved(false);
  };

  const handleSaveNote = (event) => {
    event.preventDefault();
    setIsNoteSaved(true);
  };

  const handleDeleteNote = (event) => {
    event.preventDefault();
    setNote("");
    setIsNoteSaved(false);
  };

  return (
    <>
      <Heading>My Recipe</Heading>

      {link && (
        <StyledPlayer>
          <ReactPlayer url={link} width="100%" height="200px" controls />
        </StyledPlayer>
      )}

      <form onSubmit={handleSaveNote}>
        <StyledTextarea value={note} name="notes" onChange={handleChange} />
        <br /> <br />
        <div>
          <StyledButton type="submit" disabled={isNoteSaved}>
            {isNoteSaved ? "Saved" : "Save"}
          </StyledButton>
          <StyledButton onClick={handleDeleteNote}>Delete</StyledButton>
        </div>
      </form>
    </>
  );
}
const StyledPlayer = styled.div`
  margin-top: 6rem;
  margin-bottom: 2rem;
`;

const StyledSection = styled.div`
  margin-top: 1rem;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 30vh;

  font-family: nunito, sans-serif;
  display: block;
  padding: 1rem;
  box-sizing: border-box;
  resize: none;
  border: 5px solid #0f5c64;
  border-radius: 20px;
`;

const StyledButton = styled.button`
  display: inline-block;

  font-size: 16px;

  border-radius: 20px;
  background-color: #0f5c64;
  color: white;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px (rgba 0, 0, 0, 0.1);
  width: 50%;
  hight: 0px;
`;
