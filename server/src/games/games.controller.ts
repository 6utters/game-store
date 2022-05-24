import {
	Body,
	Controller,
	Post,
	UploadedFile,
	UseInterceptors,
} from '@nestjs/common'
import { CreateGameDto } from './dtos/create-game.dto'
import { GamesService } from './games.service'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('games')
export class GamesController {
	constructor(private gamesService: GamesService) {}

	@Post()
	@UseInterceptors(FileInterceptor('gameImage'))
	createGame(@Body() gameDto: CreateGameDto, @UploadedFile() gameImage) {
		return this.gamesService.create(gameDto, gameImage)
	}
}
