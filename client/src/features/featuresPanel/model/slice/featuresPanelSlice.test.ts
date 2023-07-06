import {
	featuresPanelActions,
	featuresPanelReducer,
} from '@/features/featuresPanel/model/slice/featurePanelSlice'
import { FeaturesPanel } from '@/features/featuresPanel/model/types/FeaturesPanel'

describe('featuresPanel', () => {
	test('selectFeature', () => {
		const state: DeepPartial<FeaturesPanel> = {
			selectedFeatures: [],
		}
		expect(
			featuresPanelReducer(
				state as FeaturesPanel,
				featuresPanelActions.selectFeature({
					id: 1,
					featureName: 'Adult only',
				}),
			),
		).toEqual({
			selectedFeatures: [{ id: 1, featureName: 'Adult only' }],
		})
	})

	test('removeSelectedGenre', () => {
		const state: DeepPartial<FeaturesPanel> = {
			selectedFeatures: [
				{ id: 1, featureName: 'Adult only' },
				{ id: 2, featureName: 'Anime' },
			],
		}
		expect(
			featuresPanelReducer(
				state as FeaturesPanel,
				featuresPanelActions.removeSelectedFeature(1),
			),
		).toEqual({
			selectedFeatures: [{ id: 2, featureName: 'Anime' }],
		})
	})
})
