import axios from 'axios'
import { API_URL } from '../shared/api'
import { GameSchema } from '@/entities/Game'

export default class GameService {
	static async fetchBySearchGames(searchTerm: string) {
		const { data } = await axios.get<GameSchema[]>(
			`${API_URL}/games?searchTerm=${searchTerm}`,
		)
		return data
	}
}
