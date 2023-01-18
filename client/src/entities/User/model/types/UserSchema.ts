import { UserRole } from '@/entities/User/model/consts/userRoles'

export interface User {
	id: number
	userName: string
	email: string
	isActivated: boolean
	roles: UserRole[]
}

export interface UserSchema {
	authData?: User
}
