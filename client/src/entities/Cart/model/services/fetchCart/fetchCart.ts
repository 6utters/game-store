import { createAsyncThunk } from '@reduxjs/toolkit'
import { Cart, cartActions } from '@/entities/Cart'
import { ThunkConfig } from '@/app/providers/storeProvider'

export const fetchCart = createAsyncThunk<Cart, void, ThunkConfig<string>>(
	'cartInteraction/fetchCart',
	async (_, thunkAPI) => {
		const { rejectWithValue, extra, dispatch } = thunkAPI
		try {
			const response = await extra.api.get<Cart>('/carts', {
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
