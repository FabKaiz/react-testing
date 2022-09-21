import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("should display correct initial count", () => {
    render(<Counter initialCount={0} />);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toBe(0);
  });

  it("should display correct count after increment", () => {
    render(<Counter initialCount={0} />);
    const incrementButton = screen.getByRole("button", { name: /Increment/i });
    const countStartingValue = Number(screen.getByTestId("count").textContent);
    expect(countStartingValue).toBe(0);
    fireEvent.click(incrementButton);
    const countValueAfterClick = Number(screen.getByTestId("count").textContent);
    expect(countValueAfterClick).toBe(1);
  });

  it("should decrement by 1 if the decrement button is clicked", () => {
    render(<Counter initialCount={0} />);
    const decrementButton = screen.getByRole("button", { name: /Decrement/i });
    const countStartingValue = Number(screen.getByTestId("count").textContent);
    expect(countStartingValue).toBe(0);
    fireEvent.click(decrementButton);
    const countValueAfterClick = Number(screen.getByTestId("count").textContent);
    expect(countValueAfterClick).toBe(-1);
  });

  it("should reset the count to 0 if the restart button is clicked", () => {
    render(<Counter initialCount={0} />);
    const incrementButton = screen.getByRole("button", { name: /Increment/i });
    const restartButton = screen.getByRole("button", { name: /Restart/i });
    const countStartingValue = Number(screen.getByTestId("count").textContent);
    expect(countStartingValue).toBe(0);
    fireEvent.click(incrementButton);
    const countValueAfterIncrementClick = Number(screen.getByTestId("count").textContent);
    expect(countValueAfterIncrementClick).toBe(1);
    fireEvent.click(restartButton);
    const countValueAfterRestart = Number(screen.getByTestId("count").textContent);
    expect(countValueAfterRestart).toBe(0);
  });

  it("should invert the signs if the switch signs button is clicked", () => {
    render(<Counter initialCount={1} />);
    const switchSignsButton = screen.getByRole("button", { name: /Switch Signs/i });
    const countStartingValue = Number(screen.getByTestId("count").textContent);
    expect(countStartingValue).toBe(1);
    fireEvent.click(switchSignsButton);
    const countValueAfterSwitchSignsClick = Number(screen.getByTestId("count").textContent);
    expect(countValueAfterSwitchSignsClick).toBe(-1);
  });
});
