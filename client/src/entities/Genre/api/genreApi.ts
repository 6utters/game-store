import { $rtkApi } from '@/shared/api'
import { Genre } from '../model/types/Genre'

const genreApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
		fetchGenres: build.query<Genre[], void>({
			query: () => ({
				url: 'genres',
			}),
			providesTags: () => [{ type: 'Genre' }],
		}),
	}),
})

export const useFetchGenres = genreApi.useFetchGenresQuery
