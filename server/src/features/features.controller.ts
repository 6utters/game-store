import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { FeaturesService } from './features.service'
import { CreateFeatureDto } from './dtos/create-feature.dto'

@Controller('features')
export class FeaturesController {
	constructor(private featuresService: FeaturesService) {}

	@Post()
	createFeature(@Body() dto: CreateFeatureDto) {
		return this.featuresService.create(dto)
	}

	@Get(':featureName')
	getGenresByValue(@Param('featureName') featureName: string) {
		return this.featuresService.getAllByValue(featureName)
	}

	@Get()
	getAllFeatures() {
		return this.featuresService.getAll()
	}
}
