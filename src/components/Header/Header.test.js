import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import useIsMobile from "../../hooks/useIsMobile";

// Mock del hook useIsMobile
jest.mock("../../hooks/useIsMobile");

describe("Header component", () => {
  beforeEach(() => {
    useIsMobile.mockReturnValue(false); // simulate a non-mobile device
  });

  it("should add 'scrolled' class after scroll", () => {
    const { getByRole } = render(<Header />);

    const headerElement = getByRole("banner");

    // Check that the 'scrolled' class is not present initially on mobile
    expect(headerElement).not.toHaveClass("scrolled");

    // Simulates scroll
    fireEvent.scroll(window, { target: { scrollY: 101 } });
    expect(headerElement).toHaveClass("scrolled");

    fireEvent.scroll(window, { target: { scrollY: 50 } });
    expect(headerElement).not.toHaveClass("scrolled");
  });
});