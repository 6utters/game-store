import { IsString } from 'class-validator'

export class CreateGenreDto {
	@IsString()
	readonly gameGenre: string
}