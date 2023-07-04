import { $api, $rtkApi } from '@/shared/api'
import { GameSchema } from '@/entities/Game'

export class SearchGamesService {
	static async search(searchTerm: string) {
		const { data } = await $api.get<GameSchema[]>(
			`/games?searchTerm=${searchTerm}`,
		)
		return data
	}
}

const searchApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
		searchGames: build.query<GameSchema[], string>({
			query: searchTerm => ({
				url: `/games?searchTerm=${searchTerm}`,
			}),
			providesTags: () => [{ type: 'SearchedGames' }],
		}),
	}),
})

export const useSearchGames = searchApi.useSearchGamesQuery
