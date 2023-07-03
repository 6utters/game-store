import { createSlice } from '@reduxjs/toolkit'
import { CartInteractionSchema } from '../types/CartInteractionSchema'
import { fetchCart } from '../services/fetchCart/fetchCart'
import { addGameToCart } from '../services/addGameToCart/addGameToCart'
import { removeGameFromCart } from '../services/removeGameFromCart/removeGameFromCart'

const initialState: CartInteractionSchema = {
	isLoading: false,
	error: undefined,
}

export const cartInteractionSlice = createSlice({
	name: 'cartInteractionSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchCart.pending, state => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchCart.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(fetchCart.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
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

export const {
	reducer: cartInteractionReducer,
	actions: cartInteractionActions,
} = cartInteractionSlice
