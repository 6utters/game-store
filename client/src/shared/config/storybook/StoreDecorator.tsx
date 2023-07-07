import { StateSchema, StoreProvider } from '@/app/providers/storeProvider'
import { ReducerList } from '@/shared/lib'
import { authByEmailReducer } from '@/features/authByEmail'
import { userCartSliceReducer } from '@/features/userCart'
import { Story } from '@storybook/react'
import { genresPanelReducer } from '@/features/genresPanel'
import { featuresPanelReducer } from '@/features/featuresPanel'
import { createGameReducer } from '@/features/createGame'

const defaultAsyncReducers: ReducerList = {
	authByEmail: authByEmailReducer,
	userCart: userCartSliceReducer,
	genresPanel: genresPanelReducer,
	featuresPanel: featuresPanelReducer,
	createGame: createGameReducer,
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
