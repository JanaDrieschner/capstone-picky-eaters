import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import Heading from "../Heading";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const OwnRecipeDetails = () => {
  const router = useRouter();
  const { link } = useRouter().query;
  const { title } = router.query;

  const localStorageKey = `note-${title}`;

  const [note, setNote] = useState("");

  useEffect(() => {
    const storedNote = localStorage.getItem(localStorageKey);
    if (storedNote) {
      setNote(storedNote);
    }
  }, [localStorageKey]);

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleSaveNote = (event) => {
    event.preventDefault();
    localStorage.setItem(localStorageKey, note);
  };

  const handleDeleteNote = (event) => {
    event.preventDefault();
    localStorage.removeItem(localStorageKey);
    setNote("");
  };

  return (
    <>
      <Heading>{title}</Heading>

      {link && (
        <StyledPlayer>
          <ReactPlayer url={link} width="100%" height="200px" controls />
        </StyledPlayer>
      )}

      <form onSubmit={handleSaveNote}>
        <StyledTextarea value={note} name="notes" onChange={handleChange} />
        <br /> <br />
        <div>
          <StyledButton type="submit">Save</StyledButton>
          <StyledButton onClick={handleDeleteNote}>Delete</StyledButton>
        </div>
      </form>
    </>
  );
};

export default OwnRecipeDetails;

const StyledPlayer = styled.div`
  margin-top: 2rem;
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
