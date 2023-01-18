import { StateSchema, ThunkExtraArgs } from './StateSchema'
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { api } from '@/store/api/api'
import gameReducer from '@/store/reducers/gameReducer/GameSlice'
import cartReducer from '@/store/reducers/cartReducer/CartSlice'
import { userReducer } from '@/entities/User'
import { $api } from '@/shared/api'
import { authByEmailReducer } from '@/features/authByEmail'

export function createReduxStore(initialState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		[api.reducerPath]: api.reducer,
		user: userReducer,
		authByEmail: authByEmailReducer,
		game: gameReducer,
		cart: cartReducer,
	}

	const extraArg: ThunkExtraArgs = {
		api: $api,
	}

	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: false,
				thunk: { extraArgument: extraArg },
			}).concat(api.middleware),
	})
}

export const store = createReduxStore()

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']
