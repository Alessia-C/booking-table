import { initializeTimes, updateTimes } from "../../utils/helperFunction";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../Form/Form";

describe("initializeTimes function", () => {
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

describe("updateTimes function", () => {
  it("calls dispatch with the correct arguments", () => {
    updateTimes(mockDispatch)("2024-11-01");
    expect(mockDispatch).toHaveBeenCalledWith({ type: "UPDATE_TIMES", date: "2024-11-01" });
  });
});

describe("Form component", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  beforeEach(() => {
    render(<Form availableTimes={availableTimes} updateTimes={updateTimes} />);
  });

  it("should render the form with all input fields", () => {
    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of People")).toBeInTheDocument();
    expect(screen.getByLabelText("Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText("Additional Notes")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  it("should update form data when inputs change", () => {
    fireEvent.change(screen.getByLabelText("Full Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Phone Number"), {
      target: { value: "123-456-7890" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Number of People"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Reservation Date"), {
      target: { value: "2024-03-28" },
    });
    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "19:00" },
    });
    fireEvent.change(screen.getByLabelText("Additional Notes"), {
      target: { value: "Window seat, please." },
    });

    expect(screen.getByLabelText("Full Name").value).toBe("John Doe");
    expect(screen.getByLabelText("Phone Number").value).toBe("123-456-7890");
    expect(screen.getByLabelText("Email").value).toBe("john@example.com");
    expect(screen.getByLabelText("Number of People").value).toBe("4");
    expect(screen.getByLabelText("Reservation Date").value).toBe("2024-03-28");
    expect(screen.getByLabelText("Choose time").value).toBe("19:00");
    expect(screen.getByLabelText("Additional Notes").value).toBe("Window seat, please.");
  });
});
