import { Form } from "./Form";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const onChange = jest.fn();

describe("Form", () => {
  it("render form", () => {
    render(<Form />);
  });

  it("button in component", () => {
    render(<Form />);
    expect(screen.getByRole("button")).toBeInTheDocument;
  });

  it("onChange in input author", () => {
    render(<Form onChange={onChange} />);
    userEvent.type(screen.getAllByRole("textbox"), "hello");
    expect(onChange).toHaveBeenCalled;
  });
});