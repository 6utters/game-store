import {
	BelongsToMany,
	Column,
	DataType,
	HasMany,
	HasOne,
	Model,
	Table,
} from 'sequelize-typescript'
import { Genre } from '../../genres/entities/genres.model'
import { GenreGames } from '../../genres/entities/genre-games.model'
import { Feature } from '../../features/entities/features.model'
import { FeatureGames } from '../../features/entities/feature-games.model'
import { Game_info } from '../../games-info/entities/game-info.model'
import { Game_media } from '../../games-media/entities/games-media.model'
import { Game_about } from '../../games-about/entities/games-about.model'
import { Rating } from '../../ratings/entities/ratings.model'

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
		type: DataType.STRING,
		allowNull: false,
	})
	gameImage: string

	@HasMany(() => Rating)
	gameRating: Rating[]

	@HasMany(() => Game_media)
	gameMedia: Game_media[]

	@HasOne(() => Game_info)
	gameInfo: Game_info

	@HasOne(() => Game_about)
	gameAbout: Game_about

	@BelongsToMany(() => Genre, () => GenreGames)
	genres: Genre[]

	@BelongsToMany(() => Feature, () => FeatureGames)
	features: Feature[]
}
