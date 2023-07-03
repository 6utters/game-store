import { Injectable } from '@nestjs/common'
import { CreateGameInfoDto } from './dtos/create-game-info.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Game } from '../games/entities/games.model'
import { Game_info } from './entities/game-info.model'

@Injectable()
export class GamesInfoService {
	constructor(
		@InjectModel(Game) private gameRepository: typeof Game,
		@InjectModel(Game_info) private gameInfoRepository: typeof Game_info,
	) {}

	public async addInfo(dto: CreateGameInfoDto) {
		try {
			const game = await this.gameRepository.findByPk(dto.gameId)
			const gameInfo = await this.gameInfoRepository.create(dto)
			await game.$set('gameInfo', gameInfo)
			return game
		} catch (e) {
			console.log(e)
		}
	}
}
