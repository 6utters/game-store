import $api, { API_URL } from '../../shared/api'
import { AuthResponse } from '../../models/response/AuthResponse'
import axios from 'axios'

export default class AuthService {
	static async login(email: string, password: string) {
		const response = await $api.post<AuthResponse>('/auth/login', {
			email,
			password,
		})
		return response.data
	}

	static async register(email: string, password: string, userName: string) {
		const response = await $api.post<AuthResponse>('/auth/register', {
			email,
			password,
			userName,
		})
		return response.data
	}

	static async logout() {
		return await $api.post('/auth/logout')
	}

	static async check() {
		const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {
			withCredentials: true,
		})
		return response.data
	}
}
