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

	public async getByValues(genreNames: string): Promise<Genre[]> {
		const genreNamesArray = JSON.parse(genreNames)
		const genres = []
		for (let i = 0; i < genreNamesArray.length; i++) {
			const genreName = genreNamesArray[i]
			genres.push(await this.genresRepository.findOne({ where: { genreName } }))
		}
		return genres
	}

	// public async getByValues(
	// 	genreNames: string[] | string,
	// ): Promise<Genre | Genre[]> {
	// 	if (Array.isArray(genreNames)) {
	// 		const genres = []
	// 		for (let i = 0; i < genreNames.length; i++) {
	// 			const genreName = genreNames[i]
	// 			genres.push(
	// 				await this.genresRepository.findOne({ where: { genreName } }),
	// 			)
	// 		}
	// 		return genres
	// 	}
	// 	return await this.genresRepository.findOne({
	// 		where: { genreName: genreNames },
	// 	})
	// }

	async getIdsByGenre(genreNames: string[] | string): Promise<number[]> {
		if (Array.isArray(genreNames)) {
			let targetIds = []
			for (let i = 0; i < genreNames.length; i++) {
				const genreName = genreNames[i]
				const targetGenre = await this.genresRepository.findOne({
					where: { genreName },
				})
				const genreGames = await this.genreGamesRepository.findAll({
					where: { genreId: targetGenre.id },
				})
				const ids = genreGames.map((genre) => genre.gameId)
				targetIds = [...targetIds, ...ids]
			}
			return this.findDuplicates(targetIds, genreNames.length)
		}
		const targetGenre = await this.genresRepository.findOne({
			where: { genreName: genreNames },
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

	public findDuplicates(arr, filtersCount): number[] {
		let counts = {}
		for (let i = 0; i < arr.length; i++) {
			if (counts[arr[i]]) {
				counts[arr[i]] += 1
			} else {
				counts[arr[i]] = 1
			}
		}

		const maxValue = filtersCount
		const arrayOfStrings = Object.keys(counts).filter(
			(key) => counts[key] === maxValue,
		)
		return arrayOfStrings.map((str) => Number(str))
	}

	public async deleteOne(genreId: number) {
		await this.genresRepository.destroy({ where: { id: genreId } })
	}
}
