import axios from 'axios'
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '@/shared/consts'
import { AuthByEmailResponse } from '@/features/authByEmail'

//todo: reconsider interceptor logic

export const API_URL = `http://localhost:5000/api`
export const SERVER_URL = `http://localhost:5000`

export const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
})

$api.interceptors.request.use(config => {
	if (config.headers) {
		// @ts-ignore
		config.headers.Authorization = `Bearer ${localStorage.getItem(
			ACCESS_TOKEN_LOCAL_STORAGE_KEY,
		)}`
	}
	return config
})

$api.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originalRequest = error.config
		if (
			error.response.status == '401' &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				const response = await axios.get<AuthByEmailResponse>(
					`${API_URL}/auth/refresh`,
					{
						withCredentials: true,
					},
				)
				localStorage.setItem(
					ACCESS_TOKEN_LOCAL_STORAGE_KEY,
					response.data.accessToken,
				)
				return $api.request(originalRequest)
			} catch (e) {
				console.log('Unauthorized')
			}
		}
		throw error
	},
)
