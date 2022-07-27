import { AppDispatch } from '../../store'
import AuthService from '../../../services/auth/auth.service'
import { setIsAuth, setUser, userSlice } from './UserSlice'
import { IUser } from '../../../models/IUser'

export const login =
	(email: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			await AuthService.login(email, password)
			dispatch(setIsAuth(true))
		} catch (e: any) {
			dispatch(userSlice.actions.setUserError(e.message))
		}
	}

export const signup =
	(email: string, password: string, userName: string) =>
	async (dispatch: AppDispatch) => {
		try {
			await AuthService.register(email, password, userName)
			dispatch(setIsAuth(true))
		} catch (e: any) {
			dispatch(userSlice.actions.setUserError(e.message))
		}
	}

export const logout = () => async (dispatch: AppDispatch) => {
	try {
		await AuthService.logout()
		localStorage.removeItem('token')
		dispatch(setIsAuth(false))
		dispatch(setUser({} as IUser))
	} catch (e: any) {
		dispatch(userSlice.actions.setUserError(e.message))
	}
}
//
// export const checkAuth = () => async (dispatch: AppDispatch) => {
// 	try {
// 		const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {
// 			withCredentials: true,
// 		})
// 		localStorage.setItem('token', response.data.accessToken)
// 		dispatch(setIsAuth(true))
// 		// dispatch(setUser(response.data.user))
// 	} catch (e: any) {
// 		dispatch(userSlice.actions.setUserError(e.message))
// 	} finally {
// 		dispatch(userSlice.actions.setIsLoading(false))
// 	}
// }
