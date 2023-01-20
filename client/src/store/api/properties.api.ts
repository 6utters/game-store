import { $rtkApi } from '@/shared/api'
import { IGenre } from '../../models/IGenre'
import { IFeature } from '../../models/IFeature'

export const propertiesApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
		fetchGenres: build.query<IGenre[], void>({
			query: () => ({
				url: 'genres',
			}),
			providesTags: () => [{ type: 'Genre' }],
		}),
		createGenre: build.mutation<IGenre[], string>({
			query: genreName => ({
				url: `genres/`,
				method: 'POST',
				body: { genreName },
			}),
			invalidatesTags: () => [{ type: 'Genre' }],
		}),
		deleteGenre: build.mutation<IGenre[], number>({
			query: genreId => ({
				url: `genres/${genreId}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => [{ type: 'Genre' }],
		}),
		fetchFeatures: build.query<IFeature[], void>({
			query: () => ({
				url: 'features',
			}),
			providesTags: () => [{ type: 'Feature' }],
		}),
		createFeature: build.mutation<IFeature[], string>({
			query: featureName => ({
				url: `features/`,
				method: 'POST',
				body: { featureName },
			}),
			invalidatesTags: () => [{ type: 'Feature' }],
		}),
		deleteFeature: build.mutation<IFeature[], number>({
			query: featureId => ({
				url: `features/${featureId}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => [{ type: 'Feature' }],
		}),
	}),
})
