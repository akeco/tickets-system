import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import NavLink from "components/shared/NavLink/NavLink";

const URL = "/some-url";
const TEXT = "PAGE 2";

test("Test navlink content", async () => {
  render(
    <BrowserRouter>
      <NavLink to={URL}>{TEXT}</NavLink>
    </BrowserRouter>
  );
  const link = screen.getByText(TEXT);

  expect(link).toBeInTheDocument;
  expect(link.closest("a")).toHaveAttribute("href", URL);

  await userEvent.hover(link);
  expect(link).toHaveClass("hover:bg-gray-100");
  expect(link).not.toHaveClass("hover:bg-gray-200");
});
