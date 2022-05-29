import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { FeaturesService } from './features.service'
import { CreateFeatureDto } from './dtos/create-feature.dto'
import { AuthGuard } from '../auth/auth.guard'
import { Roles } from '../roles/roles-auth.decorator'

@Controller('features')
export class FeaturesController {
	constructor(private featuresService: FeaturesService) {}

	@Roles('ADMIN')
	@UseGuards(AuthGuard)
	@Post()
	createFeature(@Body() dto: CreateFeatureDto) {
		return this.featuresService.create(dto)
	}

	@UseGuards(AuthGuard)
	@Get(':featureName')
	getGenresByValue(@Param('featureName') featureName: string) {
		return this.featuresService.getAllByValue(featureName)
	}

	@Get()
	getAllFeatures() {
		return this.featuresService.getAll()
	}
}
