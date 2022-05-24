import { IsNumber, IsString } from 'class-validator'

export class CreateGameDto {
	@IsString()
	readonly gameName: string
	@IsNumber()
	readonly gamePrice: number
}
