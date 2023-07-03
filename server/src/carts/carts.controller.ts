import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Query,
	UseGuards,
} from '@nestjs/common'
import { CartsService } from './carts.service'
import { AuthGuard } from '../auth/auth.guard'
import { CurrentUser } from '../users/user.decorator'
import { AddGameDto } from './dtos/addGame.dto'

@Controller('carts')
export class CartsController {
	constructor(private cartsService: CartsService) {}

	@Post()
	@UseGuards(AuthGuard)
	addGameToCard(@CurrentUser('id') id: number, @Body() dto: AddGameDto) {
		return this.cartsService.addGame(id, dto.gameName)
	}

	@Delete(':gameId')
	@UseGuards(AuthGuard)
	removeGameFromCart(
		@CurrentUser('id') id: number,
		@Param('gameId') gameId: number,
	) {
		return this.cartsService.removeGame(id, gameId)
	}

	@Get()
	@UseGuards(AuthGuard)
	getUserCart(@CurrentUser('id') id: number) {
		return this.cartsService.getCart(id)
	}

	@Get('/cartgames')
	@UseGuards(AuthGuard)
	getCartGames(
		// @CurrentUser('id') id: number,
		@Query('gameId') gameIds: number[],
	) {
		return this.cartsService.getCartGames(gameIds)
	}
}
