import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PageTemplate from "./PageTemplate";

describe("Input component", () => {
  test("renders with title", () => {
    render(
      <PageTemplate
        title="TestTitle"
        children='children'
      />
    );
    const title = screen.getByText("TestTitle")
    expect(title).toBeInTheDocument()
  });
});
