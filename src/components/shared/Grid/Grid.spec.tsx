import { render, screen, fireEvent } from "@testing-library/react";
import Grid from "components/shared/Grid/Grid";

test("Test grid content", () => {
  render(
    <Grid>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Grid>
  );

  const grid = screen.getByRole("grid");

  expect(grid).toBeInTheDocument();
  expect(grid.children.length).toEqual(3);
});
