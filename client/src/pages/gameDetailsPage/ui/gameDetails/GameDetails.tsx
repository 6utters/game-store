import { FC, memo } from 'react'

import { GameSchema } from '@/entities/Game'

import { GameDetailsInfo } from '../gameDetailsInfo/GameDetailsInfo'
import { GameDetailsImages } from '../gameDetailsImages/GameDetailsImages'
import { GameDetailsRequirements } from '../gameDetailsRequirements/GameDetailsRequirements'

import { GameSlider } from '../GameDetailsSlider/GameDetailsSlider'

import styles from './GameDetails.module.scss'

interface GameDetailsProps {
	game?: GameSchema
}

export const GameDetails: FC<GameDetailsProps> = memo(({ game }) => {
	if (!game) {
		return <h3>Something went wrong.</h3>
	}

	return (
		<div className={styles.container}>
			{/*<GameDetailsRating gameId={game.id} />*/}
			<div className={styles.sliderWrapper}>
				<GameSlider media={game.gameMedia} />
			</div>
			<GameDetailsInfo game={game} />
			<GameDetailsImages media={game.gameMedia} />
			<GameDetailsRequirements gameInfo={game.gameInfo} />
		</div>
	)
})
