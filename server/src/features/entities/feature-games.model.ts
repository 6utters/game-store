import {
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { Game } from '../../games/entities/games.model'
import { Feature } from './features.model'

@Table({ tableName: 'feature_games', createdAt: false, updatedAt: false })
export class FeatureGames extends Model<FeatureGames> {
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

	@ForeignKey(() => Feature)
	@Column({
		type: DataType.INTEGER,
	})
	featureId: number
}
