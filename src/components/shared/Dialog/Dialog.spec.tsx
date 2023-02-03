import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dialog from "components/shared/Dialog/Dialog";

const TITLE = "Some title";
const CONTENT = "Content";

class IntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

test("Test dialog content", async () => {
  render(
    <Dialog isOpen title={TITLE} onClose={() => {}} onSuccess={() => {}}>
      <p>{CONTENT}</p>
    </Dialog>
  );

  const titleElement = screen.getByText(TITLE);
  expect(titleElement).toBeInTheDocument();

  const contentElement = screen.getByText(CONTENT);
  expect(contentElement).toBeInTheDocument();

  const buttons = await screen.findAllByRole("button");
  expect(buttons).toHaveLength(2);
});

test("Test dialog actions", async () => {
  const intersectionObserverMock = () => ({
    observe: () => null,
  });
  const mockCloseFn = jest.fn().mockImplementation(intersectionObserverMock);
  const mockSuccessFn = jest.fn().mockImplementation(intersectionObserverMock);

  render(
    <Dialog
      isOpen
      title={TITLE}
      onClose={mockCloseFn}
      onSuccess={mockSuccessFn}
    >
      <p>{CONTENT}</p>
    </Dialog>
  );

  const closeButton = screen.getByText("Close");
  expect(closeButton).toBeInTheDocument();

  await userEvent.click(closeButton);
  expect(mockCloseFn).toBeCalledTimes(1);

  const createButton = screen.getByText("Create");
  expect(createButton).toBeInTheDocument();

  await userEvent.click(createButton);
  expect(mockSuccessFn).toBeCalledTimes(1);
});
