import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer/UserSlice'
import gameReducer from './reducers/gameReducer/GameSlice'

const rootReducer = combineReducers({
	user: userReducer,
	game: gameReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
