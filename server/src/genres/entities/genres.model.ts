import {
	BelongsToMany,
	Column,
	DataType,
	Model,
	Table,
} from 'sequelize-typescript'
import { Game } from '../../games/entities/games.model'
import { GenreGames } from './genre-games.model'

interface GenreCreationAttrs {
	genreName: string
}

@Table({ tableName: 'genres' })
export class Genre extends Model<Genre, GenreCreationAttrs> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
	})
	genreName: string

	@BelongsToMany(() => Game, () => GenreGames)
	games: Game[]
}
