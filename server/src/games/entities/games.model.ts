import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface UserCreationAttrs {
	gameName: string
	gamePrice: number
	gameRating: number
	gameImage: string
}

@Table({ tableName: 'games' })
export class Game extends Model<Game, UserCreationAttrs> {
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
	gameName: string

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	gamePrice: number

	@Column({
		type: DataType.INTEGER,
		defaultValue: 0,
	})
	gameRating: number

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	gameImage: string
}
