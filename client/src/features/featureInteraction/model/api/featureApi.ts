import { $rtkApi } from '@/shared/api'
import { Feature } from '@/entities/Game'

export const featureApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
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

export const {
	useCreateFeatureMutation: useCreateFeature,
	useDeleteFeatureMutation: useDeleteFeature,
	useFetchFeaturesQuery: useFetchFeatures,
} = featureApi