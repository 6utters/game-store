import { StateSchema } from './StateSchema'
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { authSlice } from '@/store/auth/auth.slice'
import { api } from '@/store/api/api'
import gameReducer from '@/store/reducers/gameReducer/GameSlice'
import cartReducer from '@/store/reducers/cartReducer/CartSlice'
import { userReducer } from '@/entities/User'

export function createReduxStore(initialState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		[api.reducerPath]: api.reducer,
		user: userReducer,
		auth: authSlice.reducer,
		game: gameReducer,
		cart: cartReducer,
	}

	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
	})
}

export const store = createReduxStore()

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']
