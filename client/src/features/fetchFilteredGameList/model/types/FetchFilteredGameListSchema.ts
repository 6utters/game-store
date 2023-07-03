import { Genre } from '@/entities/Genre'
import { Feature } from '@/entities/Feature'

export interface FetchFilteredGameListSchema {
	selectedGenres: Genre[]
	selectedFeatures: Feature[]
}