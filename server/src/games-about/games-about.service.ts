import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateGameAboutDto } from './dtos/create-game-about.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Game } from '../games/entities/games.model'
import { Game_about } from './entities/games-about.model'

@Injectable()
export class GamesAboutService {
	constructor(
		@InjectModel(Game) private gameRepository: typeof Game,
		@InjectModel(Game_about) private gameAboutRepository: typeof Game_about,
	) {}

	public async addAbout(dto: CreateGameAboutDto) {
		try {
			const game = await this.gameRepository.findByPk(dto.gameId)
			const gameAbout = await this.gameAboutRepository.create(dto)
			await game.$set('gameAbout', gameAbout)
			return game
		} catch (e) {
			throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST)
		}
	}
}
