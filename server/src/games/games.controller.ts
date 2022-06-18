import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Query,
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common'
import { CreateGameDto } from './dtos/create-game.dto'
import { GamesService } from './games.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { Roles } from '../roles/roles-auth.decorator'
import { AuthGuard } from '../auth/auth.guard'

@Controller('games')
export class GamesController {
	constructor(private gamesService: GamesService) {}

	@Roles('ADMIN')
	@UseGuards(AuthGuard)
	@Post()
	@UseInterceptors(FileInterceptor('gameImage'))
	createGame(@Body() gameDto: CreateGameDto, @UploadedFile() gameImage) {
		return this.gamesService.create(gameDto, gameImage)
	}

	@Get()
	getByFilter(
		@Query('genreName') genreName: string,
		@Query('featureName') featureName: string,
	) {
		return this.gamesService.getAllByValue(genreName, featureName)
	}

	@Delete(':id')
	deleteGame(@Param('id') id: number) {
		return this.gamesService.delete(id)
	}
}
