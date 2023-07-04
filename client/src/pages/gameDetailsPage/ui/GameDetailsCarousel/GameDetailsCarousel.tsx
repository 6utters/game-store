import { FC, memo } from 'react'
import { GameMedia } from '@/entities/Game'
import { Carousel } from '@/widgets/carousel'
import styles from './GameDetailsCarousel.module.scss'

interface GameSliderProps {
	media: GameMedia[]
}

export const GameDetailsCarousel: FC<GameSliderProps> = memo(({ media }) => {
	const videos = media.filter(m => m.type === 'video')
	const images = media.filter(m => m.type === 'image')

	return (
		<Carousel
			className={styles.game_details_carousel}
			mediaItems={[...videos, ...images]}
		/>
	)
})
