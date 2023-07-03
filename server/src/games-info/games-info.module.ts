import { Module } from '@nestjs/common'
import { GamesInfoController } from './games-info.controller'
import { GamesInfoService } from './games-info.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Game } from '../games/entities/games.model'
import { Game_info } from './entities/game-info.model'

@Module({
	controllers: [GamesInfoController],
	providers: [GamesInfoService],
	imports: [SequelizeModule.forFeature([Game_info, Game])],
})
export class GamesInfoModule {}
