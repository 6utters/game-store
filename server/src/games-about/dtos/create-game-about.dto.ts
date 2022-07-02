import { IsNumber, IsString } from 'class-validator'

export class CreateGameAboutDto {
	@IsNumber()
	readonly gameId: number
	@IsString()
	readonly mainInfo: string
	@IsString()
	readonly fstP: string
	@IsString()
	readonly sndP: string
	@IsString()
	readonly thdP: string
	@IsString()
	readonly ftsP: string
	@IsString()
	readonly thsP: string
}