import { createSlice } from '@reduxjs/toolkit'
import { UserCartSchema } from '../types/UserCartSchema'
import { addGameToCart } from '../services/addGameToCart/addGameToCart'
import { removeGameFromCart } from '../services/removeGameFromCart/removeGameFromCart'

const initialState: UserCartSchema = {
	isLoading: false,
	error: undefined,
}

export const userCartSlice = createSlice({
	name: 'userCartSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(addGameToCart.pending, state => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(addGameToCart.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(addGameToCart.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(removeGameFromCart.pending, state => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(removeGameFromCart.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(removeGameFromCart.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { reducer: userCartSliceReducer, actions: userCartSliceActions } =
	userCartSlice
