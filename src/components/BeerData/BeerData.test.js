import { render, screen } from "@testing-library/react";
import BeerData from "./BeerData";

it("should render the form", () => {
    render(<BeerData />);
    const beer = screen.getByRole("article");
    expect(beer).toBeInTheDocument();
  });

  it("should render the header h1", () => {
    render(<BeerData />);
    const heading = screen.getByRole('heading', {level: 1})
    expect(heading).toBeInTheDocument();
  
  });

  it("should render the header h2", () => {
    render(<BeerData />);
    const head = screen.getAllByRole('heading', {level: 2})
    head.forEach(input => {
      expect(input).toBeInTheDocument();
    });
  
  });
  