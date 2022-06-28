import { Module } from '@nestjs/common'
import { GamesMediaController } from './games-media.controller'
import { GamesMediaService } from './games-media.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Game } from '../games/entities/games.model'
import { Game_media } from './entities/games-media.model'

@Module({
	controllers: [GamesMediaController],
	providers: [GamesMediaService],
	imports: [SequelizeModule.forFeature([Game_media, Game])],
	exports: [GamesMediaService],
})
export class GamesMediaModule {}
