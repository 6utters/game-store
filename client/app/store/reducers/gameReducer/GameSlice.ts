import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGame } from '../../../models/IGame'
import { IGenre } from '../../../models/IGenre'
import { IFeature } from '../../../models/IFeature'
import { findSelectedFilter } from '../../../utils/helpers'

interface IGameState {
	genres: IGenre[]
	features: IFeature[]
	games: IGame[]
	selectedGenres: IGenre[]
	selectedFeatures: IFeature[]
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
		setGenres: (state, action: PayloadAction<IGenre[]>) => {
			state.genres = action.payload
		},
		setFeatures: (state, action: PayloadAction<IFeature[]>) => {
			state.features = action.payload
		},
		setGames: (state, action: PayloadAction<IGame[] | []>) => {
			state.games = action.payload
		},
		setSelectedGenres: (state, action: PayloadAction<IGenre>) => {
			state.selectedGenres.push(action.payload)
		},
		removeSelectedGenre: (state, action: PayloadAction<number>) => {
			// // const searchedGenre = state.selectedGenres.find(genre => genre.id === action.payload)
			// if (searchedGenre) {
			// 	state.selectedGenres = state.selectedGenres.filter(genre => genre.id !== searchedGenre.id)
			// }
			const searchedId = findSelectedFilter(
				action.payload,
				state.selectedGenres,
			)
			state.selectedGenres = state.selectedGenres.filter(
				(genre) => genre.id !== searchedId,
			)
		},
		setSelectedFeatures: (state, action: PayloadAction<IFeature>) => {
			state.selectedFeatures.push(action.payload)
		},
		removeSelectedFeature: (state, action: PayloadAction<number>) => {
			const searchedId = findSelectedFilter(
				action.payload,
				state.selectedFeatures,
			)
			state.selectedFeatures = state.selectedFeatures.filter(
				(feature) => feature.id !== searchedId,
			)
		},

		removeGame: (state, action: PayloadAction<number>) => {
			state.games = state.games.filter((game) => game.id !== action.payload)
		},

		removeGenre: (state, action: PayloadAction<number>) => {
			state.genres = state.genres.filter((genre) => genre.id !== action.payload)
		},

		removeFeature: (state, action: PayloadAction<number>) => {
			state.features = state.features.filter(
				(feature) => feature.id !== action.payload,
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
