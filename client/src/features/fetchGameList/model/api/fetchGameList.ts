import { $rtkApi } from '@/shared/api/rtkApi'
import { Feature, GameSchema, Genre } from '@/entities/Game'

interface GameFilters {
	genres?: Genre[] | []
	features?: Feature[] | []
}

//todo: replace this feature by fetchFilteredGameList
//todo: make refactoring
export const gamesApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
		fetchGameList: build.query<GameSchema[], GameFilters>({
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

		createGame: build.mutation<GameSchema, any>({
			query: body => ({
				url: `/games/`,
				method: 'POST',
				body,
			}),
			invalidatesTags: () => [{ type: 'Game' }],
		}),
		fetchBySearchGames: build.query<GameSchema[], string>({
			query: searchTerm => ({
				url: `/games?searchTerm=${searchTerm}`,
			}),
		}),
		fetchOneGame: build.query<GameSchema, number>({
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
