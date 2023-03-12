import { Story } from '@storybook/react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export const QueryDecorator = () => (StoryComponent: Story) =>
	(
		<QueryClientProvider client={queryClient}>
			<StoryComponent />
		</QueryClientProvider>
	)
