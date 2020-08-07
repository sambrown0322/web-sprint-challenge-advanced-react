import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const fName = screen.getByLabelText(/first name/i);
  const lName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);
  const submit = screen.getByRole("button", { name: /checkout/i });

  fireEvent.change(fName, { target: { value: "Sam" } });
  fireEvent.change(lName, { target: { value: "Brown" } });
  fireEvent.change(address, { target: { value: "504 Fake St" } });
  fireEvent.change(city, { target: { value: "San Diego" } });
  fireEvent.change(state, { target: { value: "California" } });
  fireEvent.change(zip, { target: { value: 92064 } });
  fireEvent.click(submit);
  const success = screen.getByTestId(/successMessage/i);

  expect(success).toBeInTheDocument();
});
