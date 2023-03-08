import { Toolbar } from './Toolbar'
import { screen } from '@testing-library/react'
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent'

describe('Toolbar', () => {
	test('rendered', () => {
		renderComponent(<Toolbar />)
		expect(screen.getByTestId('toolbar')).toBeInTheDocument()
	})
})
