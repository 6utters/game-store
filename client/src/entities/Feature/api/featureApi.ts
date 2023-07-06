import { $rtkApi } from '@/shared/api'
import { Feature } from '../model/types/Feature'

const featureApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
		fetchFeatures: build.query<Feature[], void>({
			query: () => ({
				url: 'features',
			}),
			providesTags: () => [{ type: 'Feature' }],
		}),
	}),
})

export const useFetchFeatures = featureApi.useFetchFeaturesQuery
