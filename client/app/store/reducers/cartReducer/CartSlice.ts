import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGame } from '../../../models/IGame'

interface ICartState {
	cartGames: IGame[]
}

const initialState: ICartState = {
	cartGames: [],
}

export const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setGames: (state, action: PayloadAction<IGame[] | []>) => {
			state.cartGames = action.payload
		},
		removeGame: (state, action: PayloadAction<number>) => {
			state.cartGames = state.cartGames.filter(
				(game) => game.id !== action.payload,
			)
		},
	},
})

export const { setGames, removeGame } = CartSlice.actions

export default CartSlice.reducer
