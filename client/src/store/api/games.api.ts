import { api } from './api'
import { IGame } from '../../models/IGame'
import { IGenre } from '../../models/IGenre'
import { IFeature } from '../../models/IFeature'

interface IFilterGamesParams {
	genres: IGenre[] | []
	features: IFeature[] | []
}

export const gamesApi = api.injectEndpoints({
	endpoints: (build) => ({
		fetchGames: build.query<IGame[], IFilterGamesParams>({
			query: ({ genres, features }) => {
				//If possible - make refactoring
				const genresQuery = genres
					.map((g) => `genreName=${g.genreName}&`)
					.join('')
				const featuresQuery = features
					.map((f) => `featureName=${f.featureName}&`)
					.join('')
				const filterQuery = genresQuery.concat(featuresQuery)
				return {
					url: `games?${filterQuery}`,
				}
			},
			providesTags: () => [{ type: 'Game' }],
		}),
		createGame: build.mutation<IGame, any>({
			query: (body) => ({
				url: `/games/`,
				method: 'POST',
				body,
			}),
			invalidatesTags: () => [{ type: 'Game' }],
		}),
		fetchBySearchGames: build.query<IGame[], string>({
			query: (searchTerm) => ({
				url: `/games?searchTerm=${searchTerm}`,
			}),
		}),
		fetchOneGame: build.query<IGame, number>({
			query: (id) => ({
				url: `games/${id}`,
			}),
		}),
		deleteGame: build.mutation<void, number>({
			query: (id) => ({
				url: `games/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => [{ type: 'Game' }],
		}),
		getRating: build.query<any, number>({
			query: (gameId) => ({
				url: `ratings/${gameId}`,
			}),
			providesTags: () => [{ type: 'Rating' }],
		}),
		rate: build.mutation<any, { gameId: number; rate: number }>({
			query: (body) => ({
				url: `ratings/`,
				method: 'POST',
				body,
			}),
			invalidatesTags: () => [{ type: 'Rating' }],
		}),
	}),
})
