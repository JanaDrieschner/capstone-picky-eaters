import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import Heading from "../Heading";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

import Image from "next/image";
import { BsArrowLeftCircle } from "react-icons/bs";

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

  const handleReload = () => {
    router.reload();
  };

  return (
    <>
      <Heading>{title}</Heading>

      {link && link.includes("youtube") ? (
        <StyledPlayer>
          <ReactPlayer url={link} width="110%" height="200px" controls />
        </StyledPlayer>
      ) : (
        <StyledImage>
          {link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Image
                src="/ananas.jpg"
                alt="ananas with sunglasses"
                width={410}
                height={250}
                onClick={handleReload}
              />
            </Link>
          ) : null}
        </StyledImage>
      )}

      <form onSubmit={handleSaveNote}>
        <StyledTextarea
          value={note}
          name="notes"
          onChange={handleChange}
          placeholder="Click on the image to access your saved website and add any notes you`d like"
        />

        <StyledSection>
          <StyledLink href="/myrecipes">
            <BsArrowLeftCircle />
          </StyledLink>
          <StyledButton type="submit">Save</StyledButton>
          <StyledButton onClick={handleDeleteNote}>Delete</StyledButton>
        </StyledSection>
      </form>
    </>
  );
};

export default OwnRecipeDetails;

const StyledPlayer = styled.div`
  margin-top: 6rem;
  margin-bottom: 2rem;
`;

const StyledImage = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0%;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 35vh;
  display: flex;
  align-items: center;
  margin-left: 15px;
  justify-content: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  border: 3px ridge #0f5c64;
  font-family: nunito, sans-serif;
  display: block;
  padding: 1rem;
  box-sizing: border-box;
  resize: none;
  border-radius: 20px;
`;

const StyledButton = styled.button`
  font-size: 20px;
  border-radius: 20px;
  background-color: #0f5c64;
  color: white;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  width: 120px;
  height: 40px;
  margin-right: 10px;
  margin-left: 19px;
`;

const StyledLink = styled(Link)`
  font-size: 30px;
  color: #0f5c64;
  padding: 20px;
`;
