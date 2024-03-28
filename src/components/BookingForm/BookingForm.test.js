import { initializeTimes, updateTimes } from "../../utils/helperFunction";
import { fireEvent, render } from "@testing-library/react";
import Form from "../Form/Form";

describe("inizializeTimes function", () => {
  it("returns the expected array of times", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });
});

const mockDispatch = jest.fn();

describe('updateTimes function', () => {
  it('calls dispatch with the correct arguments', () => {
    updateTimes(mockDispatch)('2024-11-01');
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', date: '2024-11-01' });
  });
});

describe("Form component", () => {
  it("should render the form with all input fields", () => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const { getByLabelText, getByTestId } = render(<Form availableTimes={availableTimes} updateTimes={updateTimes} />);
    // Check if all input fields are rendered
    expect(getByLabelText("Choose date")).toBeInTheDocument();
    expect(getByLabelText("Choose time")).toBeInTheDocument();
    expect(getByLabelText("Number of guests")).toBeInTheDocument();
    expect(getByLabelText("Occasion")).toBeInTheDocument();
    // Check if the submit button is rendered
    expect(getByTestId('submit-button')).toBeInTheDocument();
  });

  it("should update form data when inputs change", () => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const {getByLabelText} = render(<Form availableTimes={availableTimes} updateTimes={updateTimes} />)
    // Simulate user input
    fireEvent.change(getByLabelText("Choose date"), {target: {value: "2024-03-28"}})
    fireEvent.change(getByLabelText("Number of guests"), {target: {value: "4"}})
    // Check if form data is updated
    expect(getByLabelText('Choose date').value).toBe('2024-03-28');
    expect(getByLabelText('Number of guests').value).toBe('4');
  })
});
