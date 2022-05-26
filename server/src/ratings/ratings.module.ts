import { Module } from '@nestjs/common'
import { RatingsService } from './ratings.service'
import { RatingsController } from './ratings.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from '../users/entities/users.model'
import { Game } from '../games/entities/games.model'
import { AuthModule } from '../auth/auth.module'
import { Rating } from './entities/ratings.model'

@Module({
	providers: [RatingsService],
	controllers: [RatingsController],
	imports: [SequelizeModule.forFeature([Rating, User, Game]), AuthModule],
})
export class RatingsModule {}
