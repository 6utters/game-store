import { createSlice } from '@reduxjs/toolkit'
import { CreateGameSchema } from '../types/CreateGame'
import { createGame } from '../services/createGame'

const initialState: CreateGameSchema = {
	isLoading: false,
	error: undefined,
}

const createGameSlice = createSlice({
	name: 'createGame',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(createGame.pending, state => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(createGame.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(createGame.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { reducer: createGameReducer } = createGameSlice
