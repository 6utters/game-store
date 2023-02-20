import { $api } from '@/shared/api'
import { GameSchema } from '@/entities/Game'

export class SearchGamesService {
	static async search(searchTerm: string) {
		const { data } = await $api.get<GameSchema[]>(
			`/games?searchTerm=${searchTerm}`,
		)
		return data
	}
}
