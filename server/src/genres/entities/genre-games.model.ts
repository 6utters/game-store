import {
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { Game } from '../../games/entities/games.model'
import { Genre } from './genres.model'

@Table({ tableName: 'genre_games', createdAt: false, updatedAt: false })
export class GenreGames extends Model<GenreGames> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@ForeignKey(() => Game)
	@Column({
		type: DataType.INTEGER,
	})
	gameId: number

	@ForeignKey(() => Genre)
	@Column({
		type: DataType.INTEGER,
	})
	genreId: number
}
