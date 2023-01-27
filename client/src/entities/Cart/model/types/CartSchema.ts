export interface CartSchema {
	id?: number
	userId?: number
	games: CartGame[]
}

export interface CartGame {
	id: number
	cartId: number
	gameId: number
}
