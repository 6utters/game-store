import $api, { API_URL } from '../providers'

export default class CartService {
	static async fetchCart() {
		const { data } = await $api.get(`${API_URL}/carts`)
		return data
	}

	static async addToCart(gameName: string) {
		const { data } = await $api.post(`${API_URL}/carts`, { gameName })
	}

	static async removeFromCart(gameId: string) {
		const { data } = await $api.delete(`${API_URL}/carts/${gameId}`)
		return data
	}
}
