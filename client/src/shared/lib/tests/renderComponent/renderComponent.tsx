import { ReactNode } from 'react'
import { StoreProvider } from '@/app/providers/storeProvider'
import { render } from '@testing-library/react'

export function renderComponent(component: ReactNode) {
	return render(<StoreProvider>{component}</StoreProvider>)
}
