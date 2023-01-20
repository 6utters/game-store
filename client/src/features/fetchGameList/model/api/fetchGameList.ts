import { $rtkApi } from '@/shared/api/rtkApi'
import { Feature, Game, Genre } from '@/entities/Game/model/types/Game'

interface GameFilters {
	genres?: Genre[] | []
	features?: Feature[] | []
}

//todo: make refactoring
export const gamesApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
		fetchGameList: build.query<Game[], GameFilters>({
			query: ({ genres = [], features = [] }) => {
				const genresQuery = genres
					.map(g => `genreName=${g.genreName}&`)
					.join('')
				const featuresQuery = features
					.map(f => `featureName=${f.featureName}&`)
					.join('')
				const filterQuery = genresQuery.concat(featuresQuery)
				return {
					url: `games?${filterQuery}`,
				}
			},
			providesTags: () => [{ type: 'Game' }],
		}),

		createGame: build.mutation<Game, any>({
			query: body => ({
				url: `/games/`,
				method: 'POST',
				body,
			}),
			invalidatesTags: () => [{ type: 'Game' }],
		}),
		fetchBySearchGames: build.query<Game[], string>({
			query: searchTerm => ({
				url: `/games?searchTerm=${searchTerm}`,
			}),
		}),
		fetchOneGame: build.query<Game, number>({
			query: id => ({
				url: `games/${id}`,
			}),
		}),
		deleteGame: build.mutation<void, number>({
			query: id => ({
				url: `games/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => [{ type: 'Game' }],
		}),
		getRating: build.query<any, number>({
			query: gameId => ({
				url: `ratings/${gameId}`,
			}),
			providesTags: () => [{ type: 'Rating' }],
		}),
		rate: build.mutation<any, { gameId: number; rate: number }>({
			query: body => ({
				url: `ratings/`,
				method: 'POST',
				body,
			}),
			invalidatesTags: () => [{ type: 'Rating' }],
		}),
	}),
})

export const useFetchGameList = gamesApi.useFetchGameListQuery
