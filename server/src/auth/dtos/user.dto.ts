import {
	IsArray,
	IsBoolean,
	IsEmail,
	IsNumber,
	IsString,
} from 'class-validator'
import { Cart } from '../../carts/entities/carts.model'

export class UserDto {
	@IsEmail()
	email: string
	@IsNumber()
	id: number
	@IsBoolean()
	isActivated: boolean
	@IsString()
	userName: string
	@IsArray()
	roles: []
	cart: Cart

	constructor(model) {
		this.email = model.email
		this.id = model.id
		this.userName = model.userName
		this.isActivated = model.isActivated
		this.roles = model.roles
		this.cart = model.cart
	}
}
