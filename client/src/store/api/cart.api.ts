import { ICart } from '../../models/ICart'
import { $rtkApi } from '@/shared/api'

export const cartApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
		fetchCart: build.query<ICart, void>({
			query: () => ({
				url: '/carts',
				credentials: 'include',
			}),
		}),
	}),
})
