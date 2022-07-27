import { combineReducers, configureStore } from '@reduxjs/toolkit'
import gameReducer from './reducers/gameReducer/GameSlice'
import cartReducer from './reducers/cartReducer/CartSlice'
import { authSlice } from './auth/auth.slice'
import { api } from './api/api'

const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authSlice.reducer,
	game: gameReducer,
	cart: cartReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: false,
			}).concat(api.middleware),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
