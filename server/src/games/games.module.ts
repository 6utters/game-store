import { forwardRef, Module } from '@nestjs/common'
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
import { AuthModule } from '../auth/auth.module'
import { Game_info } from '../games-info/entities/game-info.model'
import { Game_media } from '../games-media/entities/games-media.model'
import { GamesMediaModule } from '../games-media/games-media.module'

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
			Game_info,
			Game_media,
		]),
		FilesModule,
		GenresModule,
		FeaturesModule,
		GamesMediaModule,
		forwardRef(() => AuthModule),
	],
	exports: [GamesService],
})
export class GamesModule {}
