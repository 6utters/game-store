import { UserRole } from '../consts/userRoles'
import { Cart } from '@/entities/Cart'

export interface User {
	id: number
	userName: string
	email: string
	isActivated: boolean
	roles: UserRole[]
	cart: Cart
}

export interface UserSchema {
	authData?: User
}
