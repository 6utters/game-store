import { $rtkApi } from '@/shared/api'
import { Rating } from '@/entities/Rating/model/types/rating'

interface RateArgs {
	rate: number
	gameId: number
}

const articlesRatingApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
		getRating: build.query<Rating[], number>({
			query: gameId => ({
				url: `ratings/${gameId}`,
			}),
			providesTags: () => [{ type: 'Rating' }],
		}),
		rate: build.mutation<Rating, RateArgs>({
			query: body => ({
				url: `ratings/`,
				method: 'POST',
				body,
			}),
			invalidatesTags: () => [{ type: 'Rating' }],
		}),
	}),
})

export const useGetRating = articlesRatingApi.useGetRatingQuery
export const useRate = articlesRatingApi.useRateMutation
