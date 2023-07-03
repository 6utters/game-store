import { IsNumber, IsString } from 'class-validator'

export class CreateMediaDto {
	@IsNumber()
	readonly gameId: number

	@IsString()
	readonly type: string

	@IsString()
	readonly url: string
}