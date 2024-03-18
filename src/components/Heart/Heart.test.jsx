import { render, screen } from "@testing-library/react";
import Heart from './Heart';
import '@testing-library/jest-dom/extend-expect';

describe("Heart Component", () => {
  
  it("should render correctly", () => {
    render(<Heart />);
    expect(screen.getByTestId("heart")).toBeInTheDocument();
  });

  it("should render correctly when selected", () => {
    render(<Heart selected />);
    expect(screen.getByTestId("heart")).toBeInTheDocument();
    expect(screen.getByTestId("heart")).toHaveClass("heart-selected");
  });
});