import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/storeProvider'
import { cartActions } from '@/entities/Cart'

export const removeGameFromCart = createAsyncThunk<
	void,
	number,
	ThunkConfig<any>
>('cartInteraction/removeGameToCart', async (gameId, thunkAPI) => {
	const { extra, dispatch, rejectWithValue } = thunkAPI
	try {
		await extra.api.delete(`/carts/${gameId}`)

		dispatch(cartActions.removeFromCart(gameId))
	} catch (e: any) {
		rejectWithValue(e.response.data.message)
	}
})
