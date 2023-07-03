import { StateSchema } from '@/app/providers/storeProvider'
import { getSelectedGenres } from './getSelectedGenres'

describe('getSelectedGenres', () => {
	test('if there are genres in the list', () => {
		const state: DeepPartial<StateSchema> = {
			fetchFilteredGameList: {
				selectedGenres: [
					{ id: 1, genreName: 'Action' },
					{ id: 2, genreName: 'Action-Adventure' },
				],
			},
		}

		expect(getSelectedGenres(state as StateSchema)).toEqual([
			{ id: 1, genreName: 'Action' },
			{ id: 2, genreName: 'Action-Adventure' },
		])
	})
	test('if there are no genres in the list', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getSelectedGenres(state as StateSchema)).toEqual([])
	})
})
