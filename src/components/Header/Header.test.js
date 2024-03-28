import { render } from "@testing-library/react"
import Header from "./Header"

describe("Header component", () => {
    test("renders logo", () => {
        const { getByAltText }  = render(<Header />)
        const logoElement = getByAltText("logo little lemon restaurant")
        expect(logoElement).toBeInTheDocument()
    } )
})