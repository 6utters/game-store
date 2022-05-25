import {
	BelongsToMany,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { User } from '../../users/entities/users.model'
import { Game } from '../../games/entities/games.model'
import { CartGames } from './cart-games.model'

@Table({ tableName: 'carts' })
export class Cart extends Model<Cart> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@ForeignKey(() => User)
	@Column({
		type: DataType.INTEGER,
	})
	userId: number

	@BelongsToMany(() => Game, () => CartGames)
	games: Game[]
}
