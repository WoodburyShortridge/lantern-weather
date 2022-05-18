import {fireEvent, render} from '@testing-library/react'
import {act} from 'react-dom/test-utils'
import '@testing-library/jest-dom'
import useIsMobile from '../../../utilities/hooks/useIsMobile'

// dumb helper to await next event loop @todo something better
const rest = async () => await new Promise((r) => setTimeout(r, 1))

test('use is mobile', async () => {
	const TestElement = ({isMobileCb}: { isMobileCb: (isMobile: boolean) => void }) => {
		const isMobile = useIsMobile()
		isMobileCb(isMobile)
		return null
	}

	const isMobileCb = jest.fn()
	render(<TestElement isMobileCb={isMobileCb}/>)

	await act(async () => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 1440
		})
		fireEvent(window, new Event('resize'))
		await rest()
		expect(isMobileCb).toBeCalledWith(false)
	})
})

// @todo test other hooks