import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Feature } from './entities/features.model'
import { CreateFeatureDto } from './dtos/create-feature.dto'
import { FeatureGames } from './entities/feature-games.model'
import { GenresService } from '../genres/genres.service'

@Injectable()
export class FeaturesService {
	constructor(
		@InjectModel(Feature) private featuresRepository: typeof Feature,
		@InjectModel(FeatureGames)
		private featureGamesRepository: typeof FeatureGames,
		private genresService: GenresService,
	) {}

	public async create(dto: CreateFeatureDto): Promise<Feature> {
		return this.featuresRepository.create(dto)
	}

	public async getByValues(featureNames: string): Promise<Feature[]> {
		const featureNamesArray = JSON.parse(featureNames)
		const features = []
		for (let i = 0; i < featureNamesArray.length; i++) {
			const featureName = featureNamesArray[i]
			features.push(
				await this.featuresRepository.findOne({ where: { featureName } }),
			)
		}
		return features
	}

	public async getIdsByFeature(
		featureNames: string[] | string,
	): Promise<number[]> {
		if (Array.isArray(featureNames)) {
			let targetIds = []
			for (let i = 0; i < featureNames.length; i++) {
				const featureName = featureNames[i]
				const targetFeature = await this.featuresRepository.findOne({
					where: { featureName },
				})
				const featureGames = await this.featureGamesRepository.findAll({
					where: { featureId: targetFeature.id },
				})
				const ids = featureGames.map((feature) => feature.gameId)
				targetIds = [...targetIds, ...ids]
			}
			return this.genresService.findDuplicates(targetIds, featureNames.length)
		}
		const targetFeature = await this.featuresRepository.findOne({
			where: { featureName: featureNames },
		})
		const featureGames = await this.featureGamesRepository.findAll({
			where: { featureId: targetFeature.id },
		})
		return featureGames.map((feature) => feature.gameId)
	}

	public async getAllByValue(featureName: string): Promise<Feature[]> {
		return await this.featuresRepository.findAll({
			where: { featureName },
			include: { all: true },
		})
	}

	public async getAll(): Promise<Feature[]> {
		return await this.featuresRepository.findAll({ include: { all: true } })
	}

	public async deleteOne(featureId: number) {
		await this.featuresRepository.destroy({ where: { id: featureId } })
	}
}
