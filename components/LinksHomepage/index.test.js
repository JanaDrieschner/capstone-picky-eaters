import { render, screen, fireEvent } from "@testing-library/react";
import LinksHomepage from ".";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("renders the component correctly", () => {
  render(<LinksHomepage />);
  expect(
    screen.getByText(/Start by adding your own recipes/i)
  ).toBeInTheDocument();

  expect(screen.getByText(/Inspire Me/i)).toBeInTheDocument();
});

test("updates link, title, and category state variables on input change", () => {
  render(<LinksHomepage />);
  const linkInput = screen.getByLabelText(/Link/i);
  const titleInput = screen.getByLabelText(/Title/i);
  const categoryInput = screen.getByLabelText(/Category/i);

  fireEvent.change(linkInput, { target: { value: "https://www.example.com" } });
  expect(linkInput).toHaveValue("https://www.example.com");

  fireEvent.change(titleInput, { target: { value: "Test Recipe" } });
  expect(titleInput).toHaveValue("Test Recipe");

  fireEvent.change(categoryInput, { target: { value: "Dinner" } });
  expect(categoryInput).toHaveValue("Dinner");
});
