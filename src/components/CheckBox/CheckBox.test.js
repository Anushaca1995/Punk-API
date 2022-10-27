import { render, screen } from "@testing-library/react";
import CheckBox from "./CheckBox";

it("should render the form", () => {
    render(<CheckBox />);
    const check = screen.getByRole("form");
    expect(check).toBeInTheDocument();
  });

  it("should render the alt text on checkbox", () => {
    render(<CheckBox />);
    const nameInput = screen.getByAltText('checkbox');
    expect(nameInput).toBeInTheDocument();
  });

  
  