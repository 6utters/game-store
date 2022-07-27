import { Module } from '@nestjs/common'
import { GamesAboutController } from './games-about.controller'
import { GamesAboutService } from './games-about.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Game } from '../games/entities/games.model'
import { Game_about } from './entities/games-about.model'

@Module({
	controllers: [GamesAboutController],
	providers: [GamesAboutService],
	imports: [SequelizeModule.forFeature([Game_about, Game])],
})
export class GamesAboutModule {}
