import React, { FC, memo } from 'react'
import Image from 'next/image'
import { BsPlayFill } from 'react-icons/bs'
import { GameMedia } from '@/entities/Game'
import { SERVER_URL } from '@/shared/api'
import cn from 'classnames'

import styles from './CarouselThumbList.module.scss'

interface CarouselThumbListProps {
	mediaItems: GameMedia[]
	currentIndex: number
	setIndex: (index: number) => void
	currentThumbRowIndex: number
}

export const CarouselThumbList: FC<CarouselThumbListProps> = memo(props => {
	const { mediaItems, currentIndex, setIndex, currentThumbRowIndex } = props

	return (
		<ul
			className={styles.carousel_thumb_list}
			style={{
				transform: `translateX(-${currentThumbRowIndex * 100}%)`,
			}}
		>
			{mediaItems.map((mediaItem, index) => (
				<li key={mediaItem.id} className={styles.carousel_thumb_item}>
					{mediaItem.type === 'image' ? (
						<Image
							className={cn(styles.thumb_image, {
								[styles.inactive]: currentIndex !== index,
							})}
							src={`${SERVER_URL as string}${mediaItem.url}`}
							alt={'thumbImage'}
							width='0'
							height='0'
							sizes='100vw'
							onClick={() => setIndex(index)}
						/>
					) : (
						<>
							{currentIndex !== index && (
								<span className={styles.thumb_play_icon}>
									<BsPlayFill />
								</span>
							)}
							<video
								className={cn(styles.thumb_video, {
									[styles.active]: currentIndex !== index,
								})}
								src={`${SERVER_URL as string}${mediaItem.url}#t=8`}
								onClick={() => setIndex(index)}
							/>
						</>
					)}
				</li>
			))}
		</ul>
	)
})
