import { Body, Controller, Post } from '@nestjs/common'
import { GamesAboutService } from './games-about.service'
import { CreateGameAboutDto } from './dtos/create-game-about.dto'

@Controller('games-about')
export class GamesAboutController {
	constructor(private gamesAboutService: GamesAboutService) {}

	@Post()
	addAboutGame(@Body() dto: CreateGameAboutDto) {
		return this.gamesAboutService.addAbout(dto)
	}
}
