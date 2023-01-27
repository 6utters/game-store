import { $rtkApi } from '@/shared/api'
import { Feature, Genre } from '@/entities/Game'

export const propertiesApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
		fetchGenres: build.query<Genre[], void>({
			query: () => ({
				url: 'genres',
			}),
			providesTags: () => [{ type: 'Genre' }],
		}),
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
		fetchFeatures: build.query<Feature[], void>({
			query: () => ({
				url: 'features',
			}),
			providesTags: () => [{ type: 'Feature' }],
		}),
		createFeature: build.mutation<Feature[], string>({
			query: featureName => ({
				url: `features/`,
				method: 'POST',
				body: { featureName },
			}),
			invalidatesTags: () => [{ type: 'Feature' }],
		}),
		deleteFeature: build.mutation<Feature[], number>({
			query: featureId => ({
				url: `features/${featureId}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => [{ type: 'Feature' }],
		}),
	}),
})
