import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Header from "components/Header/Header";

test("Test header content", async () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const buttons = await screen.findAllByRole("button");
  const navlinks = await screen.findAllByRole("navlink");

  expect(buttons).toHaveLength(2);
  expect(navlinks).toHaveLength(2);
});

test("Test header actions", async () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const navlink = screen.getByText("Sprints");

  expect(navlink).toBeInTheDocument();

  await userEvent.click(navlink);
  expect(navlink).toHaveClass("bg-gray-100");
});
