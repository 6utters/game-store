import { Body, Controller, Post } from '@nestjs/common'
import { CreateGameInfoDto } from './dtos/create-game-info.dto'
import { GamesInfoService } from './games-info.service'

@Controller('games-info')
export class GamesInfoController {
	constructor(private gamesInfoService: GamesInfoService) {}

	@Post()
	addGameInfo(@Body() gameInfoDto: CreateGameInfoDto) {
		return this.gamesInfoService.addInfo(gameInfoDto)
	}
}
