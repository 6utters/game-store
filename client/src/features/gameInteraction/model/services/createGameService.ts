import { GameAbout, GameInfo, GameSchema } from '@/entities/Game'
import { $api } from '@/shared/api'

export default class CreateGameService {
	static async createGame(game: any) {
		const { data } = await $api.post<GameSchema>('/games', game)
		return data
	}

	static async addInfo(gameInfo: GameInfo) {
		await $api.post('/games-info', gameInfo)
	}

	static async addAboutInfo(gameAboutInfo: GameAbout) {
		await $api.post('/games-about', gameAboutInfo)
	}

	static async addMedia(
		media: any,
		gameId: number,
		type: string,
		folder: string,
	) {
		await $api.post(
			`/games/media?folder=${folder}&gameId=${gameId}&type=${type}`,
			media,
		)
	}

	static async fetchBySearchGames(searchTerm: string) {
		const { data } = await $api.get<GameSchema[]>(
			`/games?searchTerm=${searchTerm}`,
		)
		return data
	}
}
