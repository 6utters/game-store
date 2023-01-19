import { $api, API_URL } from '../shared/api'

export default class CartService {
	static async fetchCart() {
		const { data } = await $api.get(`${API_URL}/carts`)
		return data
	}

	static async addToCart(gameName: string) {
		return await $api.post(`${API_URL}/carts`, { gameName })
	}

	static async removeFromCart(gameId: string) {
		const { data } = await $api.delete(`${API_URL}/carts/${gameId}`)
		return data
	}
}

// const baseQuery = fetchBaseQuery({
// 	baseUrl: API_URL,
// 	prepareHeaders: (headers, { getState }) => {
// 		const accessToken = localStorage.getItem('token')
// 		if (accessToken) {
// 			headers.set('authorization', `Bearer ${accessToken}`)
// 		}
// 		return headers
// 	},
// })
//
// export const cartApi = createApi({
// 	reducerPath: 'api/cart',
// 	baseQuery,
// 	endpoints: (build) => ({
// 		fetchCart: build.query<any, void>({
// 			query: () => ({
// 				url: '/carts',
// 				credentials: 'include',
// 			}),
// 		}),
// 	}),
// })
