import { IsString } from 'class-validator'

export class CreateGenreDto {
	@IsString()
	readonly genreName: string
}
