import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";

describe("Basic rendering of counter", () => {
  it("Should render Counter text", () => {
    const counter = shallow(<Counter />);
    const counterHeaderText = counter.find(Text);
    expect(counterHeaderText).toBeDefined();
  });

  it("should equal to 0", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("Counter")).toHaveTextContent(0);
  });

  it("should be enabled", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
  });

  it("should be disabled", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("button-down")).toBeDisabled();
  });
});
