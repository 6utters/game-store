import { UserRole } from '../consts/userRoles'
import { CartSchema } from '@/entities/Cart'

export interface User {
	id: number
	userName: string
	email: string
	isActivated: boolean
	roles: UserRole[]
	cart: CartSchema
}

export interface UserSchema {
	authData?: User
}
