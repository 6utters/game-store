import { FC } from 'react'
import styles from './Game.module.scss'
import GameSlider from './GameSlider/GameSlider'
import AboutGameInfo from './AboutGameInfo/AboutGameInfo'
import GameImages from './GameImages/GameImages'
import Specifications from './Specifications/Specifications'
import Rating from './Rating/Rating'
import { gamesApi } from '../../../../store/api/games.api'
import Spinner from '../../../ui/Spinner/Spinner'

const Game: FC<{ gameId: number }> = ({ gameId }) => {
	const { data: game } = gamesApi.useFetchOneGameQuery(gameId)
	const gameImages = game && game.gameMedia.filter((g) => g.type === 'image')
	return (
		<>
			{game ? (
				<div className={styles.container}>
					<Rating gameId={game.id} />
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
			) : (
				<Spinner />
			)}
		</>
	)
}

export default Game
