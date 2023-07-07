import { FC, memo } from 'react'
import Image from 'next/image'
import { GameMedia } from '@/entities/Game/model/types/GameSchema'

import styles from './GameDetailsImages.module.scss'

interface GameDetailsImagesProps {
	images: GameMedia[]
}

export const GameDetailsImages: FC<GameDetailsImagesProps> = memo(
	({ images }) => {
		return (
			<div className={styles.container_element}>
				{images.map(image => (
					<div className={styles.grid_item} key={image.url}>
						<Image
							width='100'
							height='100'
							sizes='100vh'
							src={`http://localhost:5000${image.url}`}
							alt='image'
						/>
					</div>
				))}
			</div>
		)
	},
)
