import { Injectable } from '@nestjs/common'
import { CreateGameDto } from './dtos/create-game.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Game } from './entities/games.model'
import { FilesService } from '../files/files.service'
import { GenresService } from '../genres/genres.service'
import { FeaturesService } from '../features/features.service'

@Injectable()
export class GamesService {
	constructor(
		@InjectModel(Game) private gameRepository: typeof Game,
		private filesService: FilesService,
		private genresService: GenresService,
		private featuresService: FeaturesService,
	) {}

	public async create(gameDto: CreateGameDto, gameImage: any): Promise<Game> {
		const fileName = await this.filesService.createFile(gameImage)
		const game = await this.gameRepository.create({
			...gameDto,
			gameImage: fileName,
		})
		const genres = await this.genresService.getByValues(gameDto.genreNames)
		await game.$set('genres', [genres[0].id])
		for (let i = 1; i < genres.length; i++) {
			await game.$add('genres', [genres[i].id])
		}
		const features = await this.featuresService.getByValues(
			gameDto.featureNames,
		)
		await game.$set('features', [features[0].id])
		for (let i = 1; i < features.length; i++) {
			await game.$add('features', [features[i].id])
		}
		return game
	}

	public async findGameByName(gameName: string): Promise<Game> {
		return await this.gameRepository.findOne({
			where: { gameName },
			include: { all: true },
		})
	}

	async getAll(): Promise<Game[]> {
		return this.gameRepository.findAll({ include: { all: true } })
	}
}
