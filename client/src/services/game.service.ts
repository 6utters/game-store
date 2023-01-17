import axios from 'axios'
import $api, { API_URL } from '../shared/api'
import { IGame } from '../models/IGame'
import { IGameInfo } from '../models/IGameInfo'
import { IGameAboutInfo } from '../models/IGameAboutInfo'

export default class GameService {
	static async createGame(game: any) {
		const { data } = await $api.post<IGame>(`${API_URL}/games`, game)
		return data
	}

	static async addInfo(gameInfo: IGameInfo) {
		await $api.post(`${API_URL}/games-info`, gameInfo)
	}

	static async addAboutInfo(gameAboutInfo: IGameAboutInfo) {
		await $api.post(`${API_URL}/games-about`, gameAboutInfo)
	}

	static async addMedia(
		media: any,
		gameId: number,
		type: string,
		folder: string,
	) {
		await $api.post(
			`${API_URL}/games/media?folder=${folder}&gameId=${gameId}&type=${type}`,
			media,
		)
	}

	static async deleteGame(gameId: number) {
		await $api.delete(`${API_URL}/games/${gameId}`)
	}

	static async fetchBySearchGames(searchTerm: string) {
		const { data } = await axios.get<IGame[]>(
			`${API_URL}/games?searchTerm=${searchTerm}`,
		)
		return data
	}

	static async fetchGames() {
		const { data } = await axios.get<IGame[]>(`${API_URL}/games`)
		return data
	}

	static async fetchOneGame(id: string) {
		return await axios.get<IGame>(`${API_URL}/games/${id}`)
	}
}
