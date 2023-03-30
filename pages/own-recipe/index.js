import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function CreateOwnRecipe() {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setLink(event.target.value);
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(link);
    setLink("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="link">Link</label>
      <input type="text" name="link" value={link} onChange={handleChange} />
      <label htmlFor="title">Title</label>
      <input type="text" name="title" value={title} onChange={handleChange} />
      <button type="submit">Safe</button>
    </form>
  );
}
