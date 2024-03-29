import {
	BelongsToMany,
	Column,
	DataType,
	HasMany,
	HasOne,
	Model,
	Table,
} from 'sequelize-typescript'
import { Role } from '../../roles/entities/roles.model'
import { UserRoles } from '../../roles/entities/user-roles.model'
import { Cart } from '../../carts/entities/carts.model'
import { Rating } from '../../ratings/entities/ratings.model'

interface UserCreationAttrs {
	userName: string
	email: string
	password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
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
	})
	userName: string

	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
	})
	email: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	password: string

	@Column({
		type: DataType.BOOLEAN,
		defaultValue: false,
	})
	isActivated: boolean

	@Column({
		type: DataType.STRING,
	})
	activationLink: string
	
	@HasMany(() => Rating)
	ratings: Rating[]

	@HasOne(() => Cart)
	cart: Cart

	@BelongsToMany(() => Role, () => UserRoles)
	roles: Role[]
}
