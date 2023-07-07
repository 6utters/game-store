import { FC, memo, useMemo } from 'react'

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
	const images = useMemo(
		() => game?.gameMedia.filter(mediaItem => mediaItem.type === 'image'),
		[game?.gameMedia],
	)
	const videos = useMemo(
		() => game?.gameMedia.filter(mediaItem => mediaItem.type === 'video'),
		[game?.gameMedia],
	)

	if (!game || !images || !videos) {
		return <h3>Something went wrong.</h3>
	}

	return (
		<div className={styles.container}>
			<GameRating gameId={game.id} />
			<GameDetailsCarousel mediaItems={[...videos, ...images]} />
			<GameDetailsInfo game={game} />
			<GameDetailsImages images={images} />
			<GameDetailsRequirements gameInfo={game.gameInfo} />
		</div>
	)
})
