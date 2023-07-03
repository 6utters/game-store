import { IsString } from 'class-validator'

export class CreateFeatureDto {
	@IsString()
	readonly featureName: string
}