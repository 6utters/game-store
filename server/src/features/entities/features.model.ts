import {
	BelongsToMany,
	Column,
	DataType,
	Model,
	Table,
} from 'sequelize-typescript'
import { Game } from '../../games/entities/games.model'
import { FeatureGames } from './feature-games.model'

interface FeatureCreationAttrs {
	featureName: string
}

@Table({ tableName: 'features' })
export class Feature extends Model<Feature, FeatureCreationAttrs> {
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
	featureName: string

	@BelongsToMany(() => Game, () => FeatureGames)
	games: Game[]
}
