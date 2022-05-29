import { IsArray, IsNumber, IsString } from 'class-validator'

export class CreateGameDto {
	@IsString()
	readonly gameName: string
	@IsNumber()
	readonly gamePrice: number
	@IsArray()
	readonly genreNames: string[] | string
	@IsArray()
	readonly featureNames: string[] | string
}
