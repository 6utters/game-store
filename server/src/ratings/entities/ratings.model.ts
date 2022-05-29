import {
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { User } from '../../users/entities/users.model'
import { Game } from '../../games/entities/games.model'

interface RatingCreationAttrs {
	rate: number
	userId: number
	gameId: number
}

@Table({ tableName: 'ratings' })
export class Rating extends Model<Rating, RatingCreationAttrs> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@Column({
		type: DataType.INTEGER,
	})
	rate: number

	@ForeignKey(() => User)
	@Column({
		type: DataType.INTEGER,
	})
	userId: number

	@ForeignKey(() => Game)
	@Column({
		type: DataType.INTEGER,
	})
	gameId: number
}
