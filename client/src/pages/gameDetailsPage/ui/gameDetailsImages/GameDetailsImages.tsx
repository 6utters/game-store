import { FC, memo, useMemo } from 'react'

import { GameMedia } from '@/entities/Game/model/types/GameSchema'

import styles from './GameDetailsImages.module.scss'

interface GameDetailsImagesProps {
	media?: GameMedia[]
}

export const GameDetailsImages: FC<GameDetailsImagesProps> = memo(
	({ media }) => {
		const images = media?.filter(mediaItem => mediaItem.type === 'image')

		const arrangedImages = useMemo(() => {
			return images?.map(image => (
				<div className={styles.grid_item} key={image.url}>
					<img src={`http://localhost:5000${image.url}`} alt='image' />
				</div>
			))
		}, [images])

		return (
			<>
				{images && (
					<div className={styles.container_element}>{arrangedImages}</div>
				)}
			</>
		)
	},
)
