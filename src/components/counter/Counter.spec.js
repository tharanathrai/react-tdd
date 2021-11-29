import { shallow } from "enzyme";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";

describe("Basic rendering of counter", () => {
  it("Should render Counter text", () => {
    const counter = shallow(<Counter />);
    const counterText = counter.find(Text);
    expect(counterText).toBeDefined();
  });

  it("should equal to 0", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("Counter")).toHaveTextContent(0);
  });

  it("should be able to increment", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
  });

  /*it("should be unable to decrement", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("button-down")).toBeDisabled();
  });*/
});

describe("Testing counter functionality", () => {
  it("increments counter", () => {
    const { getByTestId } = render(<Counter />);

    fireEvent.click(getByTestId("button-up"));

    expect(getByTestId("Counter")).toHaveTextContent("1");
  });

  it("decrements counter", () => {
    const { getByTestId } = render(<Counter />);

    fireEvent.click(getByTestId("button-down"));

    expect(getByTestId("Counter")).toHaveTextContent("-1");
  });
});
