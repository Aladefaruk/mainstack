/** @format */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Transactions from "./Transactions";

describe("Transactions component", () => {
  it("updates checkbox state correctly", () => {
    const { getByLabelText } = render(<Transactions transactions={[]} />);

    // Get the checkbox element for 'Successful'
    const successfulCheckbox = getByLabelText("Successful");

    if (!successfulCheckbox) {
      console.error("Checkbox not found with label 'Successful'");
      return;
    }

    // Simulate a click on the 'Successful' checkbox
    fireEvent.click(successfulCheckbox);

    // Expect the 'Successful' checkbox to be checked after clicking
    expect(successfulCheckbox.checked).toBe(true);
  });

  it("toggles modal visibility correctly", () => {
    const { getByText } = render(<Transactions transactions={[]} />);

    // Get the button that toggles the modal
    const filterButton = getByText("Filter");

    if (!filterButton) {
      console.error("Button not found with text 'Filter'");
      return;
    }

    // Simulate a click on the button to open the modal
    fireEvent.click(filterButton);

    // Expect the modal to be visible after clicking
    const modal = document.querySelector(".modal");
    if (!modal) {
      console.error("Modal not found");
      return;
    }
    expect(modal).toBeInTheDocument();

    // Simulate another click on the button to close the modal
    fireEvent.click(filterButton);

    // Expect the modal to be closed after clicking again
    expect(modal).not.toBeInTheDocument();
  });
});
