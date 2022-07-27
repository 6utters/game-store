import { forwardRef, Module } from '@nestjs/common'
import { GenresService } from './genres.service'
import { GenresController } from './genres.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Genre } from './entities/genres.model'
import { Game } from '../games/entities/games.model'
import { GenreGames } from './entities/genre-games.model'
import { AuthModule } from '../auth/auth.module'

@Module({
	providers: [GenresService],
	controllers: [GenresController],
	imports: [
		SequelizeModule.forFeature([Genre, Game, GenreGames]),
		forwardRef(() => AuthModule),
	],
	exports: [GenresService],
})
export class GenresModule {}
