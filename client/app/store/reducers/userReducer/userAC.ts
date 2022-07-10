import { AppDispatch } from '../../store'
import AuthService from '../../../services/auth.service'
import { setIsAuth, setIsLoading, setUser } from './UserSlice'
import { IUser } from '../../../models/IUser'
import axios from 'axios'
import { AuthResponse } from '../../../models/response/AuthResponse'
import { API_URL } from '../../../providers'

export const login =
	(email: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			const response = await AuthService.login(email, password)
			localStorage.setItem('token', response.data.accessToken)
			dispatch(setIsAuth(true))
			dispatch(setUser(response.data.user))
		} catch (e) {
			console.log(e)
		}
	}

export const signup =
	(email: string, password: string, userName: string) =>
	async (dispatch: AppDispatch) => {
		try {
			const response = await AuthService.register(email, password, userName)
			localStorage.setItem('token', response.data.accessToken)
			dispatch(setIsAuth(true))
			dispatch(setUser(response.data.user))
		} catch (e) {
			console.log(e)
		}
	}

export const logout = () => async (dispatch: AppDispatch) => {
	try {
		await AuthService.logout()
		localStorage.removeItem('token')
		dispatch(setIsAuth(false))
		dispatch(setUser({} as IUser))
	} catch (e) {
		console.log(e)
	}
}

export const checkAuth = () => async (dispatch: AppDispatch) => {
	try {
		const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {
			withCredentials: true,
		})
		localStorage.setItem('token', response.data.accessToken)
		dispatch(setIsAuth(true))
		dispatch(setUser(response.data.user))
	} catch (e) {
		console.log(e)
	} finally {
		dispatch(setIsLoading(false))
	}
}
