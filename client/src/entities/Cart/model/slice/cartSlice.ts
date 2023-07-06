import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { Cart, CartGame } from '../types/Cart'
import { CART_GAMES_LOCAL_STORAGE_KEY } from '@/shared/consts'

const initialState: Cart = {
	games: [],
}

export const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		initCart: (state, action: PayloadAction<Cart>) => {
			state.games = action.payload.games
			state.id = action.payload.id
			state.userId = action.payload.userId
			localStorage.setItem(
				CART_GAMES_LOCAL_STORAGE_KEY,
				JSON.stringify(action.payload.games),
			)
		},
		addToCart: (state, action: PayloadAction<CartGame>) => {
			state.games.push(action.payload)
			localStorage.setItem(
				CART_GAMES_LOCAL_STORAGE_KEY,
				JSON.stringify(state.games),
			)
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			const index = current(state.games).findIndex(
				game => game.gameId === action.payload,
			)
			state.games.splice(index, 1)
			localStorage.setItem(
				CART_GAMES_LOCAL_STORAGE_KEY,
				JSON.stringify(state.games),
			)
		},
		removeCart: state => {
			state.games = []
			state.id = undefined
			state.userId = undefined
			localStorage.removeItem(CART_GAMES_LOCAL_STORAGE_KEY)
		},
	},
})

export const { reducer: cartReducer, actions: cartActions } = cartSlice
