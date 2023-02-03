import { render, screen, fireEvent } from "@testing-library/react";
import Button from "components/shared/Button/Button";

const BUTTON_TITLE = "Click me";

test("Test button content", () => {
  render(<Button>{BUTTON_TITLE}</Button>);

  const button = screen.getByText(BUTTON_TITLE);

  expect(button).toBeInTheDocument();
  expect(() => screen.getByText("not-existing-header-label")).toThrow(
    "Unable to find an element"
  );
});

test("Test button click action", () => {
  const intersectionObserverMock = () => ({
    observe: () => null,
  });
  const mockClickFn = jest.fn().mockImplementation(intersectionObserverMock);
  render(<Button onClick={mockClickFn}>{BUTTON_TITLE}</Button>);

  const button = screen.getByText(BUTTON_TITLE);

  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(mockClickFn).toBeCalledTimes(1);
});
