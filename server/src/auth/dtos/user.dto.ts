import { IsArray, IsBoolean, IsEmail, IsNumber } from 'class-validator'

export class UserDto {
	@IsEmail()
	email: string
	@IsNumber()
	id: number
	@IsBoolean()
	isActivated: boolean
	@IsArray()
	roles: []

	constructor(model) {
		this.email = model.email
		this.id = model.id
		this.isActivated = model.isActivated
		this.roles = model.roles
	}
}
