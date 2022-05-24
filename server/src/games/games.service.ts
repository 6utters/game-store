import { Injectable } from '@nestjs/common'
import { CreateGameDto } from './dtos/create-game.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Game } from './entities/games.model'
import { FilesService } from '../files/files.service'

@Injectable()
export class GamesService {
	constructor(
		@InjectModel(Game) private gameRepository: typeof Game,
		private filesService: FilesService,
	) {}

	public async create(gameDto: CreateGameDto, gameImage: any) {
		const fileName = await this.filesService.createFile(gameImage)
		return await this.gameRepository.create({ ...gameDto, gameImage: fileName })
	}
}
