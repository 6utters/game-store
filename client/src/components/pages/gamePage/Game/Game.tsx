import { FC } from 'react'
import GameSlider from './GameSlider/GameSlider'
import AboutGameInfo from './AboutGameInfo/AboutGameInfo'
import Specifications from './Specifications/Specifications'
import Spinner from '../../../ui/Spinner/Spinner'
import { gamesApi } from '@/features/fetchGameList'
import { GameMedia } from '@/entities/Game/model/types/GameSchema'
import styles from './Game.module.scss'
import { GameDetailsImages } from '@/pages/gameDetailsPage/ui/gameDetailsImages/GameDetailsImages'

const GameSide: FC<{ gameId: number }> = ({ gameId }) => {
	const { data: game } = gamesApi.useFetchOneGameQuery(gameId)
	const gameImages =
		game && game.gameMedia.filter((g: GameMedia) => g.type === 'image')
	return (
		<>
			{game ? (
				<div className={styles.container}>
					{/*<Rating gameId={game.id} />*/}
					<div className={styles.sliderWrapper}>
						<GameSlider media={game.gameMedia} />
					</div>
					<AboutGameInfo
						aboutInfo={game.gameAbout}
						gameGenres={game.genres}
						gameFeatures={game.features}
						gameName={game.gameName}
					/>
					<GameDetailsImages media={game.gameMedia} />
					<Specifications gameInfo={game.gameInfo} />
				</div>
			) : (
				<Spinner />
			)}
		</>
	)
}

export default GameSide
