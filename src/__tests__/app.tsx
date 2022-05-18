import App from '../app';
import { render, fireEvent } from '@testing-library/react';

describe('App', () => {
	it('renders correctly', () => {
		const app = render(<App />)
		expect(app).toMatchSnapshot()
	})

	it('expands map selector', () => {
		render(<App />)
		const button = document.querySelector('button[aria-label="Select locations"]')
		const expandable = document.querySelector('div[aria-hidden="true"]')
		expect(button).toHaveAttribute('aria-selected', 'false')
		expect(expandable).toHaveStyle('height: 0')
		fireEvent(
			button,
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
			}),
		)
		expect(expandable).toHaveStyle('height: 400px')
	})

	//@todo test adding locations
	//@todo test using current location
	//@todo test changing units
	//@todo test removing locations
})