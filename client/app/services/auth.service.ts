import $api from '../providers'
import { AxiosResponse } from 'axios'
import { AuthResponse } from '../models/response/AuthResponse'

export default class AuthService {
	static async login(
		email: string,
		password: string,
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/auth/login', { email, password })
	}

	static async register(
		email: string,
		password: string,
		userName: string,
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/auth/register', {
			email,
			password,
			userName,
		})
	}

	static async logout(): Promise<void> {
		return $api.post('/auth/logout')
	}
}
