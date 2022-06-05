import { IRole } from './IRole'

export interface IUser {
	email: string
	isActivated: boolean
	id: number
	roles: IRole[]
}
