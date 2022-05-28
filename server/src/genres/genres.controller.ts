import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { GenresService } from './genres.service'
import { CreateGenreDto } from './dtos/create-genre.dto'

@Controller('genres')
export class GenresController {
	constructor(private genresService: GenresService) {}

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
