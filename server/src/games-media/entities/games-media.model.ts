import {
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { Game } from '../../games/entities/games.model'

interface GameMediaCreationAttrs {
	gameId: number
	type: string
	url: string
}

@Table({ tableName: 'games_media' })
export class Game_media extends Model<Game_media, GameMediaCreationAttrs> {
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

	@Column({
		type: DataType.STRING,
		values: ['video', 'image'],
	})
	type: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	url: string
}
