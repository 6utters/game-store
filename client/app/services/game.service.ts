import axios from 'axios'
import $api, { API_URL } from '../providers'
import { IGame } from '../models/IGame'
import { IGenre } from '../models/IGenre'
import { IFeature } from '../models/IFeature'
import { IGameInfo } from '../models/IGameInfo'
import { IGameAboutInfo } from '../models/IGameAboutInfo'

export default class GameService {
	static async createGame(game: any) {
		const { data } = await $api.post<IGame>(`${API_URL}/games`, game)
		console.log('data:', data)
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

	static async fetchGames() {
		const { data } = await axios.get<IGame[]>(`${API_URL}/games`)
		return data
	}

	static async fetchOneGame(id: string) {
		return await axios.get<IGame>(`${API_URL}/games/${id}`)
	}

	static async fetchGenres() {
		const { data } = await axios.get<IGenre[]>(`${API_URL}/genres`)
		return data
	}

	static async fetchFeatures() {
		const { data } = await axios.get<IFeature[]>(`${API_URL}/features`)
		return data
	}

	static async createGenre(genreName: string) {
		await $api.post(`${API_URL}/genres`, { genreName })
	}

	static async deleteGenre(genreId: number) {
		await $api.delete(`${API_URL}/genres/${genreId}`)
	}

	static async createFeature(featureName: string) {
		await $api.post(`${API_URL}/features`, { featureName })
	}

	static async deleteFeature(featureId: number) {
		await $api.delete(`${API_URL}/features/${featureId}`)
	}

	static async fetchGamesByFilter(
		genres: IGenre[] | [],
		features: IFeature[] | [],
	) {
		const genresQuery = genres.map((g) => `genreName=${g.genreName}&`).join('')
		const featuresQuery = features
			.map((f) => `featureName=${f.featureName}&`)
			.join('')
		const filterQuery = genresQuery.concat(featuresQuery)
		const { data } = await axios.get(`${API_URL}/games?${filterQuery}`)
		return data
	}
}
