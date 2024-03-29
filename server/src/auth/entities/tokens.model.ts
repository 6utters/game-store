import {
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { User } from '../../users/entities/users.model'

@Table({ tableName: 'tokens' })
export class Token extends Model<Token> {
	@Column({
		type: DataType.STRING(1000),
		allowNull: false,
	})
	refreshToken: string

	@ForeignKey(() => User)
	@Column({
		type: DataType.INTEGER,
	})
	userId: number
}
