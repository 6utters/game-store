import { IsNumber, IsString } from 'class-validator'

export class CreateGameInfoDto {
	@IsNumber()
	readonly gameId: number
	@IsString()
	readonly developer: string
	@IsString()
	readonly publisher: string
	@IsString()
	readonly releaseDate: string
	@IsString()
	readonly os: string
	@IsString()
	readonly processor: string
	@IsString()
	readonly memory: string
	@IsString()
	readonly storage: string
	@IsString()
	readonly graphics: string
}
