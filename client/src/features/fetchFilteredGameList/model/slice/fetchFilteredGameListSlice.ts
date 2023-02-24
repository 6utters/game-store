import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchFilteredGameListSchema } from '../types/FetchFilteredGameListSchema'
import { findSelectedFilterId } from '@/shared/lib'
import { Genre } from '@/entities/Genre'
import { Feature } from '@/entities/Feature'

const initialState: FetchFilteredGameListSchema = {
	selectedFeatures: [],
	selectedGenres: [],
}

export const fetchFilteredGameListSlice = createSlice({
	name: 'fetchFilteredGameListSlice',
	initialState,
	reducers: {
		selectGenre: (state, action: PayloadAction<Genre>) => {
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
		selectFeature: (state, action: PayloadAction<Feature>) => {
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
	},
})

export const {
	reducer: fetchFilteredGameListReducer,
	actions: fetchFilteredGameListActions,
} = fetchFilteredGameListSlice
