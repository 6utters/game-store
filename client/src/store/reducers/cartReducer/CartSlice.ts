import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GameSchema } from '@/entities/Game'

export interface CartState {
	cartGames: GameSchema[]
}

const initialState: CartState = {
	cartGames: [],
}

export const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCartGames: (state, action: PayloadAction<GameSchema[] | []>) => {
			state.cartGames = action.payload
		},
		removeGame: (state, action: PayloadAction<number>) => {
			state.cartGames = state.cartGames.filter(
				game => game.id !== action.payload,
			)
		},
	},
})

export const { setCartGames, removeGame } = CartSlice.actions

export default CartSlice.reducer
