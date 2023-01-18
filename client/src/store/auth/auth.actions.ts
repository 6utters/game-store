import { createAsyncThunk } from '@reduxjs/toolkit'
import { ISignupFields } from '../../models/ISignupFields'
import AuthService from '../../services/auth/auth.service'
import { AuthResponse } from '../../models/response/AuthResponse'
import { ILoginFields } from '../../models/ILoginFields'

export const register = createAsyncThunk<AuthResponse, ISignupFields>(
	'auth/register',
	async ({ email, password, userName }, thunkAPI) => {
		try {
			const response = await AuthService.register(email, password, userName)
			localStorage.setItem('token', response.accessToken)
			localStorage.setItem('user', JSON.stringify(response.user))
			return response
		} catch (e: any) {
			console.log(e)
			return thunkAPI.rejectWithValue(e.response.data.message)
		}
	},
)

export const login = createAsyncThunk<AuthResponse, ILoginFields>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password)
			localStorage.setItem('token', response.accessToken)
			localStorage.setItem('user', JSON.stringify(response.user))
			return response
		} catch (e: any) {
			return thunkAPI.rejectWithValue(e.response.data.message)
		}
	},
)
export const logout = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
	try {
		localStorage.removeItem('token')
		localStorage.removeItem('user')
		return await AuthService.logout()
	} catch (e: any) {
		return thunkAPI.rejectWithValue(e.response.data.message)
	}
})

export const check = createAsyncThunk('auth/check', async (_, thunkAPI) => {
	try {
		const response = await AuthService.check()
		localStorage.setItem('token', response.accessToken)
		localStorage.setItem('user', JSON.stringify(response.user))
		return response
	} catch (e: any) {
		return thunkAPI.rejectWithValue(e.response.data.message)
	}
})
