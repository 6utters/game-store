import { StateSchema, ThunkExtraArgs } from './StateSchema'
import {
	CombinedState,
	configureStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit'
import { api } from '@/store/api/api'
import gameReducer from '@/store/reducers/gameReducer/GameSlice'
import cartReducer from '@/store/reducers/cartReducer/CartSlice'
import { userReducer } from '@/entities/User'
import { $api } from '@/shared/api'
import { createReducerManager } from './reducerManager'

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		[api.reducerPath]: api.reducer,
		user: userReducer,
		game: gameReducer,
		cart: cartReducer,
	}

	const reducerManager = createReducerManager(rootReducer)

	const extraArgument: ThunkExtraArgs = {
		api: $api,
	}

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: false,
				thunk: { extraArgument },
			}).concat(api.middleware),
	})

	// @ts-ignore
	store.reducerManager = reducerManager

	return store
}

export const store = createReduxStore()

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']
