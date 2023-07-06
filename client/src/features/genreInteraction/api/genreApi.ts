import { $rtkApi } from '@/shared/api'
import { Genre } from '@/entities/Genre'

export const genreApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
		createGenre: build.mutation<Genre[], string>({
			query: genreName => ({
				url: `genres/`,
				method: 'POST',
				body: { genreName },
			}),
			invalidatesTags: () => [{ type: 'Genre' }],
		}),
		deleteGenre: build.mutation<Genre[], number>({
			query: genreId => ({
				url: `genres/${genreId}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => [{ type: 'Genre' }],
		}),
	}),
})

export const {
	useDeleteGenreMutation: useDeleteGenre,
	useCreateGenreMutation: useCreateGenre,
} = genreApi
