import { AuthResponse } from '../../models/response/AuthResponse'

export interface IAuthInitialState extends AuthResponse {
	isLoading: boolean
	error: string
	isAuth: boolean
}
