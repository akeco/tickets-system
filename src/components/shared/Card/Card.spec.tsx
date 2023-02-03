import { render, screen } from "@testing-library/react";
import Card from "components/shared/Card/Card";

const ID = "test123";
const CARD_TITLE = "Card title";
const CARD_DESCRIPTION = "Card description";

test("Test card content", () => {
  render(<Card id={ID} title={CARD_TITLE} description={CARD_DESCRIPTION} />);

  const title = screen.getByText(CARD_TITLE);
  const description = screen.getByText(CARD_DESCRIPTION);

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(() => screen.getByText("not-existing-header-label")).toThrow(
    "Unable to find an element"
  );
});

test("Test is action button disabled", () => {
  render(
    <Card
      id={ID}
      title={CARD_TITLE}
      description={CARD_DESCRIPTION}
      disableIconClick={true}
    />
  );

  const collapseButton = screen.getByRole("expand-btn");
  expect(collapseButton).toBeInTheDocument();
  expect(collapseButton).not.toHaveClass("cursor-pointer");
});
