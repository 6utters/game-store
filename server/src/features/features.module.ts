import { forwardRef, Module } from '@nestjs/common'
import { FeaturesController } from './features.controller'
import { FeaturesService } from './features.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Game } from '../games/entities/games.model'
import { Feature } from './entities/features.model'
import { FeatureGames } from './entities/feature-games.model'
import { GenresModule } from '../genres/genres.module'
import { AuthModule } from '../auth/auth.module'

@Module({
	controllers: [FeaturesController],
	providers: [FeaturesService],
	imports: [
		SequelizeModule.forFeature([Feature, Game, FeatureGames]),
		forwardRef(() => AuthModule),
		GenresModule,
	],
	exports: [FeaturesService],
})
export class FeaturesModule {}
