import { createAsyncThunk } from '@reduxjs/toolkit'
import { cartActions, CartSchema } from '@/entities/Cart'
import { ThunkConfig } from '@/app/providers/storeProvider'

export const fetchCart = createAsyncThunk<any, void, ThunkConfig<string>>(
	'cartInteraction/fetchCart',
	async (_, thunkAPI) => {
		const { rejectWithValue, extra, dispatch } = thunkAPI
		try {
			const response = await extra.api.get<CartSchema>('/carts', {
				withCredentials: true,
			})
			if (!response.data) {
				throw new Error()
			}
			dispatch(cartActions.initCart(response.data))

			return response.data
		} catch (e: any) {
			return rejectWithValue(e.response.data.message)
		}
	},
)
