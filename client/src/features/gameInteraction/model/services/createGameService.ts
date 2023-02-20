import { GameAbout, GameInfo } from '@/entities/Game'
import { $api } from '@/shared/api'

export default class CreateGameService {
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
}
