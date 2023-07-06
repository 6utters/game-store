import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { findSelectedFilterId } from '@/shared/lib'
import { Genre } from '@/entities/Genre'
import { GenresPanel } from '../types/GenresPanel'

const initialState: GenresPanel = {
	selectedGenres: [],
}

const genresPanelSlice = createSlice({
	name: 'genresPanel',
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
	},
})

export const { reducer: genresPanelReducer, actions: genresPanelActions } =
	genresPanelSlice
