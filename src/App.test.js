import { render, screen } from "@testing-library/react";
import Header from "./components/Header/Header";

test("Renders the Form heading", () => {
  render(<Header />);
  const headingElement = screen.getByText("Book Your Table");
  expect(headingElement).toBeInTheDocument();
});
