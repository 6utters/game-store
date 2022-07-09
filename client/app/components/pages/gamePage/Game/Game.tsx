import { FC } from 'react'
import styles from './Game.module.scss'
import { IGame } from '../../../../models/IGame'
import GameSlider from './GameSlider/GameSlider'
import AboutGameInfo from './AboutGameInfo/AboutGameInfo'
import GameImages from './GameImages/GameImages'
import Specifications from './Specifications/Specifications'
import Rating from './Rating/Rating'

const Game: FC<IGame> = (game) => {
	const gameImages = game.gameMedia.filter((g) => g.type === 'image')
	return (
		<div className={styles.container}>
			<Rating gameRating={game.gameRating} gameId={game.id} />
			<div className={styles.sliderWrapper}>
				<GameSlider media={game.gameMedia} />
			</div>
			<AboutGameInfo
				aboutInfo={game.gameAbout}
				gameGenres={game.genres}
				gameFeatures={game.features}
				gameName={game.gameName}
			/>
			<GameImages images={gameImages} />
			<Specifications gameInfo={game.gameInfo} />
		</div>
	)
}

export default Game
