import { FetchFilteredGameListSchema } from '../types/FetchFilteredGameListSchema'
import {
	fetchFilteredGameListActions,
	fetchFilteredGameListReducer,
} from './fetchFilteredGameListSlice'

describe('fetchFilteredGameListSlice', () => {
	test('selectGenre', () => {
		const state: DeepPartial<FetchFilteredGameListSchema> = {
			selectedGenres: [],
		}
		expect(
			fetchFilteredGameListReducer(
				state as FetchFilteredGameListSchema,
				fetchFilteredGameListActions.selectGenre({
					id: 1,
					genreName: 'Action',
				}),
			),
		).toEqual({ selectedGenres: [{ id: 1, genreName: 'Action' }] })
	})

	test('removeSelectedGenre', () => {
		const state: DeepPartial<FetchFilteredGameListSchema> = {
			selectedGenres: [
				{ id: 1, genreName: 'Action' },
				{ id: 2, genreName: 'Action-Adventure' },
			],
		}
		expect(
			fetchFilteredGameListReducer(
				state as FetchFilteredGameListSchema,
				fetchFilteredGameListActions.removeSelectedGenre(1),
			),
		).toEqual({
			selectedGenres: [{ id: 2, genreName: 'Action-Adventure' }],
		})
	})

	test('selectFeature', () => {
		const state: DeepPartial<FetchFilteredGameListSchema> = {
			selectedFeatures: [],
		}
		expect(
			fetchFilteredGameListReducer(
				state as FetchFilteredGameListSchema,
				fetchFilteredGameListActions.selectFeature({
					id: 1,
					featureName: 'Adult only',
				}),
			),
		).toEqual({
			selectedFeatures: [{ id: 1, featureName: 'Adult only' }],
		})
	})

	test('removeSelectedGenre', () => {
		const state: DeepPartial<FetchFilteredGameListSchema> = {
			selectedFeatures: [
				{ id: 1, featureName: 'Adult only' },
				{ id: 2, featureName: 'Anime' },
			],
		}
		expect(
			fetchFilteredGameListReducer(
				state as FetchFilteredGameListSchema,
				fetchFilteredGameListActions.removeSelectedFeature(1),
			),
		).toEqual({
			selectedFeatures: [{ id: 2, featureName: 'Anime' }],
		})
	})
})
