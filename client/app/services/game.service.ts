import axios from 'axios'
import { API_URL } from '../providers'
import { IGame } from '../models/IGame'
import { IGenre } from '../models/IGenre'
import { IFeature } from '../models/IFeature'

export default class GameService {
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
