import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';

test("renders ContactForm and fields exist", () => {
	render(<ContactForm />);

	const firstName = screen.getByLabelText(/first name/i)
	const lastName = screen.getByLabelText(/last name/i)
	const email = screen.getByLabelText(/email/i)
	const message = screen.getByLabelText(/message/i)
	const submitButton = screen.getByRole("button")

	expect(firstName).toBeInTheDocument();
	expect(lastName).toBeInTheDocument();
	expect(email).toBeInTheDocument();
	expect(message).toBeInTheDocument();
	expect(submitButton).toBeInTheDocument();
});

test("inputs accept expected text", () => {
	render(<ContactForm />);

	const firstName = screen.getByLabelText(/first name/i)
	const lastName = screen.getByLabelText(/last name/i)
	const email = screen.getByLabelText(/email/i)
	const message = screen.getByLabelText(/message/i)
	const submitButton = screen.getByRole("button")

	userEvent.type(firstName, "Luke")
	userEvent.type(lastName, "Parr")
	userEvent.type(email, "lp@pm.me")

	expect(firstName).toHaveValue("Luke")
	expect(lastName).toHaveValue("Parr")
	expect(email).toHaveValue("lp@pm.me")
	

});