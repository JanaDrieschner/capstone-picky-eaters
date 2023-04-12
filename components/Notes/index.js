import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Notes({ recipeId }) {
  const router = useRouter();

  const localStorageKey = `note-${recipeId}`;

  const [isOpen, setIsOpen] = useState(false);
  const [addNote, setAddNote] = useState("");

  useEffect(() => {
    const storedNote = localStorage.getItem(localStorageKey);
    if (storedNote) {
      setAddNote(storedNote);
      setIsOpen(true);
    }
  }, [localStorageKey]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, addNote);
  }, [addNote, localStorageKey]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setAddNote(event.target.value);
  };

  const handleDelete = () => {
    localStorage.removeItem(localStorageKey);
    setAddNote("");
    setIsOpen(false);
  };

  return (
    <>
      <StyledButton type="button" onClick={handleToggle}>
        {isOpen ? "Close Note" : "Add Note"}
      </StyledButton>

      {isOpen && (
        <StyledForm onSubmit={handleSubmit}>
          <StyledTextarea
            value={addNote}
            name="addNote"
            onChange={handleChange}
            maxLength={500}
          />
          <StyledButtonSection>
            <StyledButton type="submit">Save Note</StyledButton>
            <StyledButton type="button" onClick={handleDelete}>
              Delete Note
            </StyledButton>
          </StyledButtonSection>
        </StyledForm>
      )}
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtonSection = styled.section`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled.button`
  color: #f4f5f6;
  background-color: #0f5c64;
  border: 1px ridge #bdc0bf;
  border-radius: 45px;
`;

const StyledTextarea = styled.textarea`
  border: 1px ridge #bdc0bf;
  height: ${({ isOpen }) => (isOpen ? "200px" : "50px")};
  width: 100%;
  resize: none;
  font-family: "Nunito", sans-serif;
`;
