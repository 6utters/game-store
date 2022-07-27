import {
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { Game } from '../../games/entities/games.model'

interface GameInfoCreationAttrs {
	developer: string
	publisher: string
	releaseDate: string
	os: string
	processor: string
	memory: string
	storage: string
	graphics: string
}

@Table({ tableName: 'games_info' })
export class Game_info extends Model<Game_info, GameInfoCreationAttrs> {
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
		allowNull: false,
	})
	developer: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	publisher: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	releaseDate: string

	@Column({
		type: DataType.STRING,
		defaultValue: 'Windows 10 64bit',
	})
	os: string

	@Column({
		type: DataType.STRING,
		defaultValue: 'Windows 10 64bit',
	})
	processor: string

	@Column({
		type: DataType.STRING,
		defaultValue: 'Windows 10 64bit',
	})
	memory: string

	@Column({
		type: DataType.STRING,
		defaultValue: 'Windows 10 64bit',
	})
	storage: string

	@Column({
		type: DataType.STRING,
		defaultValue: 'Windows 10 64bit',
	})
	graphics: string
}
