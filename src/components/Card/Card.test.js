import { render, screen } from "@testing-library/react";
import Card from "./Card";

  it("should render the header h1", () => {
    render(<Card beersName="Buzz" beersTag="beersTag" beersDesc="beersDesc" beersImage="https://images.punkapi.com/v2/keg.png" beersId='1' />);
    const heading = screen.getByRole('heading', {level: 1})
    expect(heading).toBeInTheDocument();
  
  });

  it("should render the header h2", () => {
    render(<Card beersName="Buzz" beersTag="beersTag" beersDesc="beersDesc" beersImage="https://images.punkapi.com/v2/keg.png" beersId='1' />);
    const head = screen.getByRole('heading', {level: 2})
    expect(head).toBeInTheDocument();
  
  });
  