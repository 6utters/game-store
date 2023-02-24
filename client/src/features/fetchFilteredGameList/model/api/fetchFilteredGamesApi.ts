import { $rtkApi } from '@/shared/api/rtkApi'
import { GameSchema } from '@/entities/Game'
import { Genre } from '@/entities/Genre'
import { Feature } from '@/entities/Feature'

interface GameFilters {
	genres?: Genre[] | []
	features?: Feature[] | []
}

//todo: replace this feature by fetchFilteredGameList
//todo: make refactoring
export const fetchFilteredGamesApi = $rtkApi.injectEndpoints({
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
		fetchGamesByIds: build.query<GameSchema[], number[]>({
			query: gameIds => {
				const query = gameIds.map(id => `gameId=${id}&`).join('')
				return {
					url: `/carts/cartgames?${query}`,
				}
			},
			providesTags: () => [{ type: 'CartGame' }],
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

export const {
	useFetchGameListQuery: useFetchGameList,
	useFetchGamesByIdsQuery: useFetchGamesByIds,
} = fetchFilteredGamesApi
