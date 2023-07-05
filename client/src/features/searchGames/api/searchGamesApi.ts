import { $rtkApi } from '@/shared/api'
import { GameSchema } from '@/entities/Game'

const searchGamesApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
		searchGames: build.query<GameSchema[], string>({
			query: searchTerm => ({
				url: `/games?searchTerm=${searchTerm}`,
			}),
			providesTags: () => [{ type: 'SearchedGames' }],
		}),
	}),
})

export const useSearchGames = searchGamesApi.useSearchGamesQuery
