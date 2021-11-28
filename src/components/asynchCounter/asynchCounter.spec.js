import { shallow } from "enzyme";
import { render, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import AsynchCounter from "./asynchCounter";

describe("Basic rendering of counter", () => {
  describe("Testing asynchronous counter functionality", () => {
    it("increments counter after 0.5s", async () => {
      const { getByTestId, getByText } = render(<AsynchCounter />);

      fireEvent.click(getByTestId("button-up"));

      const counter = await waitFor(() => getByText("1"));

      expect(counter).toHaveTextContent("1");
    });
  });
});
