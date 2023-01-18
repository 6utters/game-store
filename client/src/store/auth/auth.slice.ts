import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { check, login, logout, register } from './auth.actions'
import { AuthSchema } from './auth.interface'
import { AuthResponse } from '../../models/response/AuthResponse'

function getFromLocalStorage(name: string) {
	if (typeof window !== 'undefined') {
		const item = localStorage.getItem(name)
		console.log('item:', item)
		return item ? JSON.parse(item) : null
	}
	return null
}

const initialState: AuthSchema = {
	// user: getFromLocalStorage('user'),
	user: null,
	accessToken: '',
	refreshToken: '',
	isLoading: false,
	error: '',
	isAuth: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		[register.pending.type]: state => {
			state.isLoading = true
		},
		[register.fulfilled.type]: (state, action: PayloadAction<AuthResponse>) => {
			state.isLoading = false
			state.user = action.payload.user
			state.error = ''
			state.isAuth = true
		},
		[register.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.user = null
			state.error = action.payload
			state.isAuth = false
		},
		[login.pending.type]: state => {
			state.isLoading = true
		},
		[login.fulfilled.type]: (state, action: PayloadAction<AuthResponse>) => {
			state.isLoading = false
			state.user = action.payload.user
			state.error = ''
			state.isAuth = true
		},
		[login.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.user = null
			state.error = action.payload
			state.isAuth = false
		},
		[logout.pending.type]: state => {
			state.isLoading = true
		},
		[logout.fulfilled.type]: state => {
			state.isLoading = false
			state.user = null
			state.error = ''
			state.isAuth = false
		},
		[logout.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
			state.isAuth = true
		},
		[check.pending.type]: state => {
			state.isLoading = true
		},
		[check.fulfilled.type]: (state, action: PayloadAction<AuthResponse>) => {
			state.isLoading = false
			state.user = action.payload.user
			state.error = ''
			state.isAuth = true
		},
		[check.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.user = null
			state.error = action.payload
			state.isAuth = false
		},
	},
})
