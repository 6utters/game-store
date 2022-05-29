import { Module } from '@nestjs/common'
import { GamesService } from './games.service'
import { GamesController } from './games.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Game } from './entities/games.model'
import { FilesModule } from '../files/files.module'
import { Cart } from '../carts/entities/carts.model'
import { CartGame } from '../carts/entities/cart-games.model'
import { Genre } from '../genres/entities/genres.model'
import { GenreGames } from '../genres/entities/genre-games.model'
import { GenresModule } from '../genres/genres.module'
import { Feature } from '../features/entities/features.model'
import { FeatureGames } from '../features/entities/feature-games.model'
import { FeaturesModule } from '../features/features.module'

@Module({
	providers: [GamesService],
	controllers: [GamesController],
	imports: [
		SequelizeModule.forFeature([
			Game,
			Cart,
			CartGame,
			Genre,
			GenreGames,
			Feature,
			FeatureGames,
		]),
		FilesModule,
		GenresModule,
		FeaturesModule,
	],
	exports: [GamesService],
})
export class GamesModule {}