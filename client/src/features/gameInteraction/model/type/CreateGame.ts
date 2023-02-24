import { GameAbout, GameInfo, GameSchema } from '@/entities/Game'

type GameFilters = {
	genreNames: string[]
	featureNames: string[]
}

export type CreateGameSchema = Pick<
	GameSchema,
	'id' | 'gameName' | 'gamePrice' | 'gameRating' | 'gameImage'
> &
	GameAbout &
	GameInfo &
	GameFilters
