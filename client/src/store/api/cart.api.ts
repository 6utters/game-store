import { api } from './api'
import { ICart } from '../../models/ICart'

export const cartApi = api.injectEndpoints({
	endpoints: (build) => ({
		fetchCart: build.query<ICart, void>({
			query: () => ({
				url: '/carts',
				credentials: 'include',
			}),
		}),
	}),
})
