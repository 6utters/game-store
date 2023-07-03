import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	UseGuards,
} from '@nestjs/common'
import { GenresService } from './genres.service'
import { CreateGenreDto } from './dtos/create-genre.dto'
import { AuthGuard } from '../auth/auth.guard'
import { Roles } from 'src/roles/roles-auth.decorator'

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

	@UseGuards(AuthGuard)
	@Delete(':genreId')
	deleteGenre(@Param('genreId') genreId: number) {
		return this.genresService.deleteOne(genreId)
	}
}
