import { forwardRef, Module } from '@nestjs/common'
import { CartsService } from './carts.service'
import { CartsController } from './carts.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from '../users/entities/users.model'
import { Cart } from './entities/carts.model'
import { CartGame } from './entities/cart-games.model'
import { GamesModule } from '../games/games.module'
import { AuthModule } from '../auth/auth.module'
import { Game } from '../games/entities/games.model'

@Module({
	providers: [CartsService],
	controllers: [CartsController],
	imports: [
		SequelizeModule.forFeature([Cart, User, CartGame, Game]),
		GamesModule,
		forwardRef(() => AuthModule),
	],
	exports: [CartsService],
})
export class CartsModule {}
