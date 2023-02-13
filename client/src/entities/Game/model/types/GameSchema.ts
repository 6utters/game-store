//todo: maybe if it doesn't fit StateSchema - the name shouldn't contain prefix Schema

import { Genre } from '@/entities/Genre'

export interface Base {
	id: number
}

export interface GameSchema extends Base {
	gameName: string
	gamePrice: number
	gameRating: number
	gameImage: string
	gameInfo: GameInfo
	gameAbout: GameAbout
	genres: Genre[]
	features: Feature[]
	gameMedia: GameMedia[]
}

export interface GameAbout extends Base {
	gameId: number
	mainInfo: string
	fstP?: string
	sndP?: string
	thdP?: string
	ftsP?: string
	thsP?: string
	updatedAt: string
	createdAt: string
}

export interface GameMedia extends Base {
	type: 'video' | 'image'
	url: string
}

export interface GameImage extends Base {
	type: 'image'
	url: string
}

//todo: can be removed to separate entity
export interface Feature extends Base {
	featureName: string
}

export interface GameInfo extends Base {
	gameId: number
	developer: string
	publisher: string
	releaseDate: string
	os: string
	processor: string
	memory: string
	storage: string
	graphics: string
}
