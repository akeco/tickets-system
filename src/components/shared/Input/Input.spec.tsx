import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "components/shared/Input/Input";

const LABEL = "Input field";
const TYPING_CONTENT = "Some text example";

test("Test label content", () => {
  render(<Input label={LABEL} />);

  const label = screen.getByText(LABEL);

  expect(label).toBeInTheDocument();
  expect(() => screen.getByText("not-existing-header-label")).toThrow(
    "Unable to find an element"
  );
});

test("Test input textarea type", async () => {
  render(<Input label={LABEL} type="textarea" />);

  const input = screen.getByRole("input");

  expect(input).toBeInTheDocument();
  expect(input.tagName.toLowerCase()).toEqual("textarea");
});

test("Test input change content", async () => {
  render(<Input label={LABEL} type="textarea" />);

  const input = screen.getByRole("input");

  userEvent.type(input, TYPING_CONTENT);
  expect(input).toHaveValue(TYPING_CONTENT);
});
