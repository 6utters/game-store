import { FC, memo } from 'react'

import { GameSchema } from '@/entities/Game'
import GameSlider from '@/components/pages/gamePage/Game/GameSlider/GameSlider'

import { GameDetailsInfo } from '../gameDetailsInfo/GameDetailsInfo'
import { GameDetailsImages } from '../gameDetailsImages/GameDetailsImages'
import { GameDetailsRequirements } from '../gameDetailsRequirements/GameDetailsRequirements'

import styles from './GameDetails.module.scss'

interface GameDetailsProps {
	game?: GameSchema
}

export const GameDetails: FC<GameDetailsProps> = memo(({ game }) => {
	if (!game) {
		//todo: try to reload the game with rtk
		return <h3>Something went wrong.</h3>
	}

	const videos = game.gameMedia.filter(media => media.type === 'video')

	return (
		<div className={styles.container}>
			{/*<Rating gameId={game.id} />*/}
			<div className={styles.sliderWrapper}>
				<GameSlider media={game.gameMedia} />
			</div>
			<GameDetailsInfo game={game} />
			<GameDetailsImages media={game.gameMedia} />
			<GameDetailsRequirements gameInfo={game.gameInfo} />
		</div>
	)
})
