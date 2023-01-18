import { AuthResponse } from '../../models/response/AuthResponse'

export interface AuthSchema extends AuthResponse {
	isLoading: boolean
	error: string
	isAuth: boolean
}
