import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { GenresService } from './genres.service'
import { CreateGenreDto } from './dtos/create-genre.dto'
import { Roles } from '../roles/roles-auth.decorator'
import { AuthGuard } from '../auth/auth.guard'

@Controller('genres')
export class GenresController {
	constructor(private genresService: GenresService) {}

	@Roles('ADMIN')
	@UseGuards(AuthGuard)
	@Post()
	createGenre(@Body() dto: CreateGenreDto) {
		return this.genresService.create(dto)
	}

	@Get(':genreName')
	getGenresByValue(@Param('genreName') genreName: string) {
		return this.genresService.getAllByValue(genreName)
	}

	@Get()
	getAllGenres() {
		return this.genresService.getAll()
	}
}
