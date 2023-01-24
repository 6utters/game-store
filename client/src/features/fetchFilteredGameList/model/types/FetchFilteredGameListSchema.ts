import { Feature, Genre } from '@/entities/Game'

export interface FetchFilteredGameListSchema {
	selectedGenres: Genre[]
	selectedFeatures: Feature[]
}