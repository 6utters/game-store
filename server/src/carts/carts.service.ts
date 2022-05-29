import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Cart } from './entities/carts.model'
import { GamesService } from '../games/games.service'
import { CartGame } from './entities/cart-games.model'

@Injectable()
export class CartsService {
	constructor(
		@InjectModel(Cart) private cartsRepository: typeof Cart,
		@InjectModel(CartGame) private cartGamesRepository: typeof CartGame,
		private gamesService: GamesService,
	) {}

	public async createCart(): Promise<Cart> {
		return await this.cartsRepository.create()
	}

	public async getCart(userId): Promise<Cart> {
		return await this.cartsRepository.findOne({
			where: { userId },
			include: { all: true },
		})
	}

	public async addGame(userId, gameName: string): Promise<CartGame> {
		const game = await this.gamesService.findGameByName(gameName)
		if (!game) {
			throw new HttpException('No such game', HttpStatus.NOT_FOUND)
		}
		const cart = await this.cartsRepository.findOne({
			where: { userId },
		})
		return await this.cartGamesRepository.create({
			gameId: game.id,
			cartId: cart.id,
		})
	}

	public async removeGame(userId, gameId): Promise<void> {
		const cart = await this.cartsRepository.findOne({
			where: { userId },
		})
		await this.cartGamesRepository.destroy({
			where: { cartId: cart.id, gameId },
		})
	}
}
