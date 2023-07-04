import { FC, memo } from 'react'

import { GameSchema } from '@/entities/Game'

import { GameRating } from '@/features/gameRating'
import { GameDetailsCarousel } from '../GameDetailsCarousel/GameDetailsCarousel'
import { GameDetailsInfo } from '../gameDetailsInfo/GameDetailsInfo'
import { GameDetailsImages } from '../gameDetailsImages/GameDetailsImages'
import { GameDetailsRequirements } from '../gameDetailsRequirements/GameDetailsRequirements'

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
			<GameRating gameId={game.id} />
			<GameDetailsCarousel media={game.gameMedia} />
			<GameDetailsInfo game={game} />
			<GameDetailsImages media={game.gameMedia} />
			<GameDetailsRequirements gameInfo={game.gameInfo} />
		</div>
	)
})
