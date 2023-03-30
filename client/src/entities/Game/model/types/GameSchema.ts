//todo: maybe if it doesn't fit StateSchema - the name shouldn't contain prefix Schema

import { Genre } from '@/entities/Genre'
import { Feature } from '@/entities/Feature'

export interface Base {
	id: number
}

export interface GameSchema {
	id: number
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

export interface GameAbout {
	id: number
	gameId: number
	mainInfo: string
	fstP?: string
	sndP?: string
	thdP?: string
	ftsP?: string
	thsP?: string
	createdAt?: string
	updatedAt?: string
}

export interface GameMedia extends Base {
	type: 'video' | 'image'
	url: string
}

export interface GameImage extends Base {
	type: 'image'
	url: string
}

export interface GameInfo {
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
