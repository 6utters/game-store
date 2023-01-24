import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { findSelectedFilterId } from '@/shared/lib'
import { Feature, GameSchema, Genre } from '@/entities/Game'

export interface IGameState {
	genres: Genre[]
	features: Feature[]
	games: GameSchema[]
	selectedGenres: Genre[]
	selectedFeatures: Feature[]
}

const initialState: IGameState = {
	genres: [],
	features: [],
	games: [],
	selectedGenres: [],
	selectedFeatures: [],
}

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setGenres: (state, action: PayloadAction<Genre[]>) => {
			state.genres = action.payload
		},
		setFeatures: (state, action: PayloadAction<Feature[]>) => {
			state.features = action.payload
		},
		setGames: (state, action: PayloadAction<GameSchema[] | []>) => {
			state.games = action.payload
		},
		setSelectedGenres: (state, action: PayloadAction<Genre>) => {
			state.selectedGenres.push(action.payload)
		},
		removeSelectedGenre: (state, action: PayloadAction<number>) => {
			const searchedId = findSelectedFilterId(
				action.payload,
				state.selectedGenres,
			)
			state.selectedGenres = state.selectedGenres.filter(
				genre => genre.id !== searchedId,
			)
		},
		setSelectedFeatures: (state, action: PayloadAction<Feature>) => {
			state.selectedFeatures.push(action.payload)
		},
		removeSelectedFeature: (state, action: PayloadAction<number>) => {
			const searchedId = findSelectedFilterId(
				action.payload,
				state.selectedFeatures,
			)
			state.selectedFeatures = state.selectedFeatures.filter(
				feature => feature.id !== searchedId,
			)
		},

		removeGame: (state, action: PayloadAction<number>) => {
			state.games = state.games.filter(game => game.id !== action.payload)
		},

		removeGenre: (state, action: PayloadAction<number>) => {
			state.genres = state.genres.filter(genre => genre.id !== action.payload)
		},

		removeFeature: (state, action: PayloadAction<number>) => {
			state.features = state.features.filter(
				feature => feature.id !== action.payload,
			)
		},
	},
})

export const {
	setGenres,
	setFeatures,
	setGames,
	setSelectedGenres,
	removeSelectedGenre,
	setSelectedFeatures,
	removeSelectedFeature,
	removeGenre,
	removeFeature,
	removeGame,
} = gameSlice.actions

export default gameSlice.reducer
