import { render, screen } from "@testing-library/react";
import BeersInfo from "./BeersInfo";

it("should render the form", () => {
    // 1. Arrange
    render(<BeersInfo />);
  
    // 2. Act
    const beer = screen.getByRole("article");
  
    // 3. Assert
    expect(beer).toBeInTheDocument();
  });

  it("should render the header h1", () => {
    render(<BeersInfo />);
    const heading = screen.getByRole('heading', {level: 1})
    expect(heading).toBeInTheDocument();
  
  });

  it("should render the header h2", () => {
    render(<BeersInfo />);
    const head = screen.getByRole('heading', {level: 2})
    expect(head).toBeInTheDocument();
  
  });
  