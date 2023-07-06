import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/storeProvider'
import { cartActions } from '@/entities/Cart'

export const addGameToCart = createAsyncThunk<void, string, ThunkConfig<any>>(
	'cartInteraction/addGameToCart',
	async (gameName, thunkAPI) => {
		const { extra, dispatch, rejectWithValue } = thunkAPI
		try {
			const response = await extra.api.post('/carts', {
				gameName,
			})
			if (!response.data) {
				throw new Error()
			}
			dispatch(cartActions.addToCart(response.data))
			return response.data
		} catch (e: any) {
			rejectWithValue(e.response.data.message)
		}
	},
)
