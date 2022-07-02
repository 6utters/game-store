import {
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { Game } from '../../games/entities/games.model'

interface GameAboutCreationAttrs {
	mainInfo: string
	fstP?: string
	sndP?: string
	thdP?: string
	ftsP?: string
	thsP?: string
}

@Table({ tableName: 'games_about' })
export class Game_about extends Model<Game_about, GameAboutCreationAttrs> {
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
		type: DataType.STRING({ length: 1000 }),
		allowNull: false,
	})
	mainInfo: string

	@Column({
		type: DataType.STRING({ length: 500 }),
		defaultValue: '',
	})
	fstP: string

	@Column({
		type: DataType.STRING({ length: 500 }),
		defaultValue: '',
	})
	sndP: string

	@Column({
		type: DataType.STRING({ length: 500 }),
		defaultValue: '',
	})
	thdP: string

	@Column({
		type: DataType.STRING({ length: 500 }),
		defaultValue: '',
	})
	ftsP: string

	@Column({
		type: DataType.STRING({ length: 500 }),
		defaultValue: '',
	})
	thsP: string
}
