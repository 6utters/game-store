import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { findSelectedFilterId } from '@/shared/lib'
import { Feature } from '@/entities/Feature'
import { FeaturesPanel } from '../types/FeaturesPanel'

const initialState: FeaturesPanel = {
	selectedFeatures: [],
}

const featuresPanelSlice = createSlice({
	name: 'featuresPanel',
	initialState,
	reducers: {
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

export const { reducer: featuresPanelReducer, actions: featuresPanelActions } =
	featuresPanelSlice
