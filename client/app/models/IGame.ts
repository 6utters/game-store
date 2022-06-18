import { IGenre } from './IGenre'
import { IFeature } from './IFeature'

export interface IGame {
	id: number
	gameName: string
	gamePrice: number
	gameRating: number
	gameImage: string
	genres: IGenre[]
	features: IFeature[]
}
