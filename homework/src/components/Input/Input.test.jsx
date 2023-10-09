import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input";

describe("Input component", () => {
  test("renders with label and placeholder", () => {
    render(
      <Input
        label="TestLabel"
        placeholder="TestPlaceholder"
        type="text"
        value=""
        onChange={() => {}}
      />
    );
    const input = screen.getByPlaceholderText("TestPlaceholder")
    expect(input).toBeInTheDocument()
  });
});
