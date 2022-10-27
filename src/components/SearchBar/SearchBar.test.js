import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

it("should render the form", () => {
    render(<SearchBar />);
    const search = screen.getByRole("form");
    expect(search).toBeInTheDocument();
  });

  it("should render the header h1", () => {
    render(<SearchBar />);
    const nameInput = screen.getByPlaceholderText(/Search.../i);
    expect(nameInput).toBeInTheDocument();
  });

  
  