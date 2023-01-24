import { FC } from 'react'
import GameSlider from './GameSlider/GameSlider'
import Spinner from '../../../ui/Spinner/Spinner'
import { gamesApi } from '@/features/fetchFilteredGameList'
import { GameMedia } from '@/entities/Game/model/types/GameSchema'
import styles from './Game.module.scss'
import { GameDetailsImages } from '@/pages/gameDetailsPage/ui/gameDetailsImages/GameDetailsImages'
import { GameDetailsRequirements } from '@/pages/gameDetailsPage/ui/gameDetailsRequirements/GameDetailsRequirements'
import { GameDetailsInfo } from '@/pages/gameDetailsPage/ui/gameDetailsInfo/GameDetailsInfo'

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
					<GameDetailsInfo
						aboutInfo={game.gameAbout}
						gameGenres={game.genres}
						gameFeatures={game.features}
						gameName={game.gameName}
					/>
					<GameDetailsImages media={game.gameMedia} />
					<GameDetailsRequirements gameInfo={game.gameInfo} />
				</div>
			) : (
				<Spinner />
			)}
		</>
	)
}

export default GameSide
