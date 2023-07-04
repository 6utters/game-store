import { FC, memo } from 'react'
import Image from 'next/image'
import { Player } from '@/widgets/player/Player'
import { GameMedia } from '@/entities/Game'
import { SERVER_URL } from '@/shared/api'

import styles from './CarouselList.module.scss'

interface CarouselListProps {
	mediaItems: GameMedia[]
	currentIndex?: number
}

export const CarouselList: FC<CarouselListProps> = memo(props => {
	const { mediaItems, currentIndex = 0 } = props

	return (
		<ul
			className={styles.carousel_list}
			style={{ transform: `translateX(-${currentIndex * 100}%)` }}
		>
			{mediaItems.map(mediaItem => (
				<li key={mediaItem.id} className={styles.carousel_item}>
					{mediaItem.type === 'image' ? (
						<Image
							className={styles.carousel_image}
							src={`${SERVER_URL as string}${mediaItem.url}`}
							alt={'carouselMediaFile'}
							width='0'
							height='0'
							sizes='100vw'
						/>
					) : (
						<Player source={`${SERVER_URL as string}${mediaItem.url}`} />
					)}
				</li>
			))}
		</ul>
	)
})
