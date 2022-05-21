import { IsBoolean, IsEmail, IsNumber } from 'class-validator'

export class UserDto {
	@IsEmail()
	email: string
	@IsNumber()
	id: number
	@IsBoolean()
	isActivated: boolean

	constructor(model) {
		this.email = model.email
		this.id = model.id
		this.isActivated = model.isActivated
	}
}
