import { render, screen, fireEvent } from "@testing-library/react";
import Notes from ".";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("should display the 'Add Note' button", () => {
  render(<Notes recipeId="123" />);
  const addButton = screen.getByRole("button", { name: "Add Note" });
  expect(addButton).toBeInTheDocument();
});

test("should open the note form when the 'Add Note' button is clicked", () => {
  render(<Notes recipeId="123" />);
  const addButton = screen.getByRole("button", { name: "Add Note" });
  fireEvent.click(addButton);
  const saveButton = screen.getByRole("button", { name: "Save Note" });
  expect(saveButton).toBeInTheDocument();
});

test("should close the note form when the 'Close Note' button is clicked", () => {
  render(<Notes recipeId="123" />);
  const addButton = screen.getByRole("button", { name: "Add Note" });
  fireEvent.click(addButton);
  const closeButton = screen.getByRole("button", { name: "Close Note" });
  fireEvent.click(closeButton);
  expect(addButton).toBeInTheDocument();
});
