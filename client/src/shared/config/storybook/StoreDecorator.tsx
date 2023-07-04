import { StateSchema, StoreProvider } from '@/app/providers/storeProvider'
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

export const StoreDecorator =
	(initialState: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
	(StoryComponent: Story) =>
		(
			<StoreProvider
				initialState={initialState}
				asyncReducers={{ ...asyncReducers, ...defaultAsyncReducers }}
			>
				<StoryComponent />
			</StoreProvider>
		)
