import {
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { Cart } from './carts.model'
import { Game } from '../../games/entities/games.model'

@Table({ tableName: 'cart_games', createdAt: false, updatedAt: false })
export class CartGames extends Model<CartGames> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@ForeignKey(() => Cart)
	@Column({
		type: DataType.INTEGER,
	})
	cartId: number

	@ForeignKey(() => Game)
	@Column({
		type: DataType.INTEGER,
	})
	gameId: number
}
