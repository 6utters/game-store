import { StoreProvider } from '@/app/providers/storeProvider'
import { ReducerList } from '@/shared/lib'
import { fetchFilteredGameListReducer } from '@/features/fetchFilteredGameList'
import { authByEmailReducer } from '@/features/authByEmail'
import { cartInteractionReducer } from '@/features/cartInteraction'
import { Story } from '@storybook/react'

const defaultAsyncReducers: ReducerList = {
	fetchFilteredGameList: fetchFilteredGameListReducer,
	authByEmail: authByEmailReducer,
	cartInteraction: cartInteractionReducer,
}

export const StoreDecorator = () => (StoryComponent: Story) =>
	(
		<StoreProvider>
			<StoryComponent />
		</StoreProvider>
	)
