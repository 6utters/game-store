import { IGenre } from './IGenre'
import { IFeature } from './IFeature'
import { IGameInfo } from './IGameInfo'
import { IGameMedia } from './IGameMedia'
import { IGameAbout } from './IGameAbout'

export interface IGame {
	id: number
	gameName: string
	gamePrice: number
	gameRating: number
	gameImage: string
	gameInfo: IGameInfo
	gameAbout: IGameAbout
	genres: IGenre[]
	features: IFeature[]
	gameMedia: IGameMedia[]
}
