import { render, screen } from "@testing-library/react";
import Form from "./components/Form/Form";
import Main from "./components/Main";

test("Renders the Form heading", () => {
  render(<Main />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
