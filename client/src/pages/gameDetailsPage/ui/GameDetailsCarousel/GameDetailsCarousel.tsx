import { FC, memo } from 'react'
import { GameMedia } from '@/entities/Game'
import { Carousel } from '@/widgets/carousel'
import styles from './GameDetailsCarousel.module.scss'

interface GameSliderProps {
	mediaItems: GameMedia[]
}

export const GameDetailsCarousel: FC<GameSliderProps> = memo(
	({ mediaItems }) => {
		return (
			<Carousel
				className={styles.game_details_carousel}
				mediaItems={mediaItems}
			/>
		)
	},
)
