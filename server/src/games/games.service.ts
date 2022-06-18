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
		if (Array.isArray(genres)) {
			await game.$set('genres', [genres[0].id])
			for (let i = 1; i < genres.length; i++) {
				await game.$add('genres', [genres[i].id])
			}
		} else {
			await game.$set('genres', [genres.id])
		}

		const features = await this.featuresService.getByValues(
			gameDto.featureNames,
		)
		if (Array.isArray(features)) {
			await game.$set('features', [features[0].id])
			for (let i = 1; i < features.length; i++) {
				await game.$add('features', [features[i].id])
			}
		} else {
			await game.$set('features', [features.id])
		}

		return game
	}

	public async findGameByName(gameName: string): Promise<Game> {
		return await this.gameRepository.findOne({
			where: { gameName },
			include: { all: true },
		})
	}

	public async getAllByValue(
		genreName: string = null,
		featureName: string = null,
	): Promise<Game[]> {
		if (genreName && !featureName) {
			const ids = await this.genresService.getIdsByGenre(genreName)
			return await this.gameRepository.findAll({
				where: { id: ids },
				include: { all: true },
			})
		}
		if (!genreName && featureName) {
			const ids = await this.featuresService.getIdsByFeature(featureName)
			return await this.gameRepository.findAll({
				where: { id: ids },
				include: { all: true },
			})
		}
		if (genreName && featureName) {
			const genreIds = await this.genresService.getIdsByGenre(genreName)
			const featureIds = await this.featuresService.getIdsByFeature(featureName)
			const targetIds = genreIds.filter((targetId) =>
				featureIds.includes(targetId),
			)
			return await this.gameRepository.findAll({
				where: { id: targetIds },
				include: { all: true },
			})
		}
		if (!genreName && !featureName) {
			return await this.gameRepository.findAll({ include: { all: true } })
		}
	}

	public async delete(id: number) {
		return this.gameRepository.destroy({ where: { id } })
	}
}
