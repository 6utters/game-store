import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Feature } from './entities/features.model'
import { CreateFeatureDto } from './dtos/create-feature.dto'

@Injectable()
export class FeaturesService {
	constructor(
		@InjectModel(Feature) private featuresRepository: typeof Feature,
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

	public async getAll(): Promise<Feature[]> {
		return this.featuresRepository.findAll({
			include: {
				all: true,
			},
		})
	}
}
