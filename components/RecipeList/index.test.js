import { render, screen } from "@testing-library/react";
import RecipeListRandom from ".";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("renders the heading", () => {
  render(<RecipeListRandom />);
  const element = screen.getByRole("heading", {
    name: /New Ideas/,
  });
  expect(element).toBeInTheDocument();
});

test("allows the user to filter recipes by meal type", async () => {
  render(<RecipeListRandom />);

  const select = await screen.findByLabelText("Food cravings");
  expect(select).toBeInTheDocument();
});
