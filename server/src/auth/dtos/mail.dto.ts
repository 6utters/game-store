import { IsEmail, IsString } from 'class-validator'

export class MailDto {
	@IsEmail()
	readonly email: string
	@IsString()
	readonly link: string
}
