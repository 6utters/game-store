import { Injectable } from '@nestjs/common'
import { RateGameDto } from './dtos/rate-game.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Rating } from './entities/ratings.model'

@Injectable()
export class RatingsService {
	constructor(@InjectModel(Rating) private ratingsRepository: typeof Rating) {}

	async rate(userId: number, dto: RateGameDto): Promise<Rating> {
		const rating = await this.ratingsRepository.findOne({
			where: { userId, gameId: dto.gameId },
		})
		if (rating) {
			await this.changeRate(userId, dto)
		}
		return await this.ratingsRepository.create({
			rate: dto.rate,
			gameId: dto.gameId,
			userId,
		})
	}

	async changeRate(userId: number, dto: RateGameDto) {
		return await this.ratingsRepository.destroy({
			where: { userId, gameId: dto.gameId },
		})
		// return await this.rate(userId, dto)
	}

	async getRate(gameId: number): Promise<number> {
		const ratings = await this.ratingsRepository.findAll({ where: { gameId } })
		return (
			ratings.reduce((total, next) => total + next.rate, 0) / ratings.length
		)
	}

	// 	async check(userId: number, dto: RateGameDto) {
	// 		await this.ratingsRepository.destroy({
	// 			where: { userId, gameId: dto.gameId },
	// 		})
	// 		return await this.rate(userId, dto)
	// 	}
}
