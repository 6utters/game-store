import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Cart } from './entities/carts.model'
import { GamesService } from '../games/games.service'

@Injectable()
export class CartsService {
	constructor(
		@InjectModel(Cart) private cartsRepository: typeof Cart,
		private gamesService: GamesService,
	) {}

	public async createCart() {
		return await this.cartsRepository.create()
	}

	public async getCart(userId) {
		return await this.cartsRepository.findOne({
			where: { userId },
			include: { all: true },
		})
	}

	public async addGame(userId, gameName: string) {
		const game = await this.gamesService.findGameByName(gameName)
		const cart = await this.cartsRepository.findOne({
			where: { userId },
			include: { all: true },
		})
		await cart.$add('games', [game.id])
		cart.games = [game]
		return cart
	}

	public async removeGame(userId, gameId) {
		const cart = await this.cartsRepository.findOne({
			where: { userId },
			include: { all: true },
		})
		await cart.$remove('games', [gameId])
	}
}
