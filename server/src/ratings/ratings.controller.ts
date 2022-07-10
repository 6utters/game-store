import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { RatingsService } from './ratings.service'
import { AuthGuard } from '../auth/auth.guard'
import { CurrentUser } from '../users/user.decorator'
import { RateGameDto } from './dtos/rate-game.dto'

@Controller('ratings')
export class RatingsController {
	constructor(private ratingsService: RatingsService) {}

	@Post()
	@UseGuards(AuthGuard)
	rateGame(
		@CurrentUser('id') id: number,
		gameId: number,
		@Body() dto: RateGameDto,
	) {
		return this.ratingsService.rate(id, dto)
	}

	@Get(':gameId')
	getRating(@Param('gameId') gameId: number) {
		return this.ratingsService.getRate(gameId)
	}

	// @Get('check/:gameId')
	// @UseGuards(AuthGuard)
	// checkRating(@CurrentUser('id') id: number, @Param('gameId') gameId: number) {
	// 	return this.ratingsService.check(id, gameId)
	// }
}
