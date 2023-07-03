import { StateSchema, ThunkExtraArgs } from './StateSchema'
import {
	CombinedState,
	configureStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit'
import { userReducer } from '@/entities/User'
import { $api, $rtkApi } from '@/shared/api'
import { createReducerManager } from './reducerManager'
import { cartReducer } from '@/entities/Cart'

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		[$rtkApi.reducerPath]: $rtkApi.reducer,
		user: userReducer,
		cart: cartReducer,
	}

	const reducerManager = createReducerManager(rootReducer)

	const extraArgument: ThunkExtraArgs = {
		api: $api,
	}

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		preloadedState: initialState,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: false,
				thunk: { extraArgument },
			}).concat($rtkApi.middleware),
	})

	// @ts-ignore
	store.reducerManager = reducerManager

	return store
}

export const store = createReduxStore()

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']
