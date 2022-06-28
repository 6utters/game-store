import { IGenre } from './IGenre'
import { IFeature } from './IFeature'
import { IGameInfo } from './IGameInfo'

export interface IGame {
	id: number
	gameName: string
	gamePrice: number
	gameRating: number
	gameImage: string
	gameInfo: IGameInfo
	genres: IGenre[]
	features: IFeature[]
}
