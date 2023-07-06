import { StateSchema } from '@/app/providers/storeProvider'
import { getSelectedFeatures } from './getSelectedFeatures'

describe('getSelectedFeatures', () => {
	test('if there are genres in the list', () => {
		const state: DeepPartial<StateSchema> = {
			fetchFilteredGameList: {
				selectedFeatures: [
					{ id: 1, featureName: 'Adult only' },
					{ id: 2, featureName: 'Anime' },
				],
			},
		}

		expect(getSelectedFeatures(state as StateSchema)).toEqual([
			{ id: 1, featureName: 'Adult only' },
			{ id: 2, featureName: 'Anime' },
		])
	})
	test('if there are no genres in the list', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getSelectedFeatures(state as StateSchema)).toEqual([])
	})
})
