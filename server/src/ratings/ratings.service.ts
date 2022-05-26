import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { RateGameDto } from './dtos/rate-game.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Rating } from './entities/ratings.model'

@Injectable()
export class RatingsService {
	constructor(@InjectModel(Rating) private ratingsRepository: typeof Rating) {}

	async rate(userId: number, { rate, gameId }: RateGameDto) {
		const rating = await this.ratingsRepository.findOne({
			where: { userId, gameId },
		})
		//make user change his rate
		if (rating) {
			throw new HttpException('already voted', HttpStatus.BAD_REQUEST)
		}
		return await this.ratingsRepository.create({
			rate,
			gameId,
			userId,
		})
	}

	async getRate(gameId: number) {
		const ratings = await this.ratingsRepository.findAll({ where: { gameId } })
		return (
			ratings.reduce((total, next) => total + next.rate, 0) / ratings.length
		)
	}
}
