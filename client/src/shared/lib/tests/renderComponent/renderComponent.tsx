import { ReactNode } from 'react'
import { StoreProvider } from '@/app/providers/storeProvider'
import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

export function renderComponent(component: ReactNode) {
	const queryClient = new QueryClient()
	return render(
		<QueryClientProvider client={queryClient}>
			<StoreProvider>{component}</StoreProvider>
		</QueryClientProvider>,
	)
}
