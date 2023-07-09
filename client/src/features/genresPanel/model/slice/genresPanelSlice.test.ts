import { GenresPanel } from '../types/GenresPanel'
import {
	genresPanelActions,
	genresPanelReducer,
} from '../slice/genresPanelSlice'

describe('genresPanel', () => {
	test('selectGenre', () => {
		const state: DeepPartial<GenresPanel> = {
			selectedGenres: [],
		}
		expect(
			genresPanelReducer(
				state as GenresPanel,
				genresPanelActions.selectGenre({
					id: 1,
					genreName: 'Action',
				}),
			),
		).toEqual({ selectedGenres: [{ id: 1, genreName: 'Action' }] })
	})

	test('removeSelectedGenre', () => {
		const state: DeepPartial<GenresPanel> = {
			selectedGenres: [
				{ id: 1, genreName: 'Action' },
				{ id: 2, genreName: 'Action-Adventure' },
			],
		}
		expect(
			genresPanelReducer(
				state as GenresPanel,
				genresPanelActions.removeSelectedGenre(1),
			),
		).toEqual({
			selectedGenres: [{ id: 2, genreName: 'Action-Adventure' }],
		})
	})
})
