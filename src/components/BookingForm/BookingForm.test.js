import { initializeTimes, updateTimes } from "../../utils/helperFunction";

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
