import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet renders correctly", () => {
  render(<Greet />); //React render component on Virtual Dom
  const textElement = screen.getByText(/hello/i); //React Quering
  expect(textElement).toBeInTheDocument(); //Assertion
});
