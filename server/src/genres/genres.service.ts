import { Injectable } from '@nestjs/common'
import { CreateGenreDto } from './dtos/create-genre.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Genre } from './entities/genres.model'

@Injectable()
export class GenresService {
	constructor(@InjectModel(Genre) private genresRepository: typeof Genre) {}

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
