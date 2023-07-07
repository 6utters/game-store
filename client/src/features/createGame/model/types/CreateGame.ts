import { GameAbout, GameInfo, GameSchema } from '@/entities/Game'

type GameFilters = {
	genreNames: string[]
	featureNames: string[]
}

export type GameArgs = Pick<
	GameSchema,
	'id' | 'gameName' | 'gamePrice' | 'gameRating' | 'gameImage'
> &
	GameAbout &
	GameInfo &
	GameFilters

export interface CreateGameSchema {
	error?: string
	isLoading: boolean
}
