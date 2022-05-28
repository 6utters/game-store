import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Feature } from './entities/features.model'
import { CreateFeatureDto } from './dtos/create-feature.dto'
import { FeatureGames } from './entities/feature-games.model'

@Injectable()
export class FeaturesService {
	constructor(
		@InjectModel(Feature) private featuresRepository: typeof Feature,
		@InjectModel(FeatureGames)
		private featureGamesRepository: typeof FeatureGames,
	) {}

	public async create(dto: CreateFeatureDto): Promise<Feature> {
		return this.featuresRepository.create(dto)
	}

	public async getByValues(featureNames: string[]): Promise<Feature[]> {
		const features = []
		for (let i = 0; i < featureNames.length; i++) {
			const featureName = featureNames[i]
			features.push(
				await this.featuresRepository.findOne({ where: { featureName } }),
			)
		}
		return features
	}

	public async getAllByValue(featureName: string): Promise<Feature[]> {
		return await this.featuresRepository.findAll({
			where: { featureName },
			include: { all: true },
		})
	}

	public async getIdsByFeature(featureName: string) {
		const targetFeature = await this.featuresRepository.findOne({
			where: { featureName },
		})
		const featureGames = await this.featureGamesRepository.findAll({
			where: { featureId: targetFeature.id },
		})
		return featureGames.map((feature) => feature.gameId)
	}

	public async getAll(): Promise<Feature[]> {
		return this.featuresRepository.findAll({
			include: {
				all: true,
			},
		})
	}
}
