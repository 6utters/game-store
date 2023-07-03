import {
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { Cart } from './carts.model'
import { Game } from '../../games/entities/games.model'

interface CartGameCreationAttr {
	cartId: number
	gameId: number
}

@Table({ tableName: 'cart_games', createdAt: false, updatedAt: false })
export class CartGame extends Model<CartGame, CartGameCreationAttr> {
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
