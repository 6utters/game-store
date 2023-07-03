import {
	Column,
	DataType,
	ForeignKey,
	HasMany,
	Model,
	Table,
} from 'sequelize-typescript'
import { User } from '../../users/entities/users.model'
import { CartGame } from './cart-games.model'

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

	@HasMany(() => CartGame)
	games: CartGame[]
}
