import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/UserSchema'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts'

const initialState: UserSchema = {}

export const userSlice = createSlice({
	name: 'entities/user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			localStorage.setItem(
				USER_LOCAL_STORAGE_KEY,
				JSON.stringify(action.payload),
			)
			state.authData = action.payload
		},
		initAuthData: state => {
			const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
			if (user) {
				state.authData = JSON.parse(user)
			}
		},
		removeAuthData: state => {
			state.authData = undefined
			localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
		},
	},
})

export const { reducer: userReducer, actions: userActions } = userSlice
