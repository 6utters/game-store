import { Injectable } from '@nestjs/common'
import { CreateGameDto } from './dtos/create-game.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Game } from './entities/games.model'
import { FilesService } from '../files/files.service'
import { GenresService } from '../genres/genres.service'
import { FeaturesService } from '../features/features.service'
import { GamesMediaService } from '../games-media/games-media.service'
import { CreateMediaDto } from '../games-media/dtos/create-media.dto'

@Injectable()
export class GamesService {
	constructor(
		@InjectModel(Game) private gameRepository: typeof Game,
		private filesService: FilesService,
		private genresService: GenresService,
		private featuresService: FeaturesService,
		private gameMediaService: GamesMediaService,
	) {}

	public async addMedia(
		mediaFile: Array<Express.Multer.File>,
		folder,
		gameId: number,
		type: string,
	) {
		console.log('mediaFile', mediaFile)
		console.log('folder', folder)
		console.log('gameId', gameId)
		console.log('type', type)
		const game = await this.gameRepository.findByPk(gameId)
		const urls = []
		for (let i = 0; i < mediaFile.length; i++) {
			urls.push(await this.filesService.saveMedia(mediaFile[i], folder))
			await this.filesService.saveMedia(mediaFile[i], folder)
		}
		for (let i = 0; i < urls.length; i++) {
			const mediasDto: CreateMediaDto = {
				url: urls[i].url,
				type,
				gameId,
			}
			const media = await this.gameMediaService.createMedia(mediasDto)
			await game.$add('gameMedia', media)
		}
	}

	public async create(
		gameDto: CreateGameDto,
		gameImage: Express.Multer.File,
		folder = 'default',
	): Promise<Game> {
		console.log('gameDto:', gameDto)
		console.log('gameImage:', gameImage)
		const fileName = await this.filesService.saveMedia(gameImage, folder)
		const game = await this.gameRepository.create({
			...gameDto,
			gameImage: fileName.url,
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

	public async getByIds(ids: number[]) {
		const games = []
		for (let i = 0; i < ids.length; i++) {
			const game = await this.gameRepository.findByPk(ids[i])
			games.push(game)
		}
		return games
	}

	async getOne(id: number) {
		return await this.gameRepository.findByPk(id, { include: { all: true } })
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
