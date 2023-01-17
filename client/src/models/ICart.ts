import { ICartGame } from './ICartGame'

export interface ICart {
	id: number
	userId: number
	games: ICartGame[]
}
