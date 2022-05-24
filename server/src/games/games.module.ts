import { Module } from '@nestjs/common'
import { GamesService } from './games.service'
import { GamesController } from './games.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Game } from './entities/games.model'
import { FilesModule } from '../files/files.module'

@Module({
	providers: [GamesService],
	controllers: [GamesController],
	imports: [SequelizeModule.forFeature([Game]), FilesModule],
})
export class GamesModule {}
