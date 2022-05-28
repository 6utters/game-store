import { Injectable } from '@nestjs/common'
import { CreateGenreDto } from './dtos/create-genre.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Genre } from './entities/genres.model'
import { GenreGames } from './entities/genre-games.model'

@Injectable()
export class GenresService {
	constructor(
		@InjectModel(Genre) private genresRepository: typeof Genre,
		@InjectModel(GenreGames) private genreGamesRepository: typeof GenreGames,
	) {}

	public async create(dto: CreateGenreDto): Promise<Genre> {
		return await this.genresRepository.create(dto)
	}

	public async getByValues(genreNames: string[]): Promise<Genre[]> {
		const genres = []
		for (let i = 0; i < genreNames.length; i++) {
			const genreName = genreNames[i]
			genres.push(await this.genresRepository.findOne({ where: { genreName } }))
		}
		return genres
	}

	async getIdsByGenre(genreName: string) {
		const targetGenre = await this.genresRepository.findOne({
			where: { genreName },
		})
		const genreGames = await this.genreGamesRepository.findAll({
			where: { genreId: targetGenre.id },
		})
		return genreGames.map((genre) => genre.gameId)
	}

	public async getAllByValue(genreName: string): Promise<Genre[]> {
		return await this.genresRepository.findAll({
			where: { genreName },
			include: { all: true },
		})
	}

	public async getAll(): Promise<Genre[]> {
		return await this.genresRepository.findAll({ include: { all: true } })
	}
}
