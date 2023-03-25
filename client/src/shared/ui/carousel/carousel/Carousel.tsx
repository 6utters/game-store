import React, { CSSProperties, FC, useCallback } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import { GameMedia } from '@/entities/Game'

import { useCarousel } from '@/shared/lib/hooks'
import { CarouselArrow } from '@/shared/ui/carousel/carouselArrow/CarouselArrow'

import styles from './Carousel.module.scss'

interface CarouselProps {
	mediaItems: GameMedia[]
	title?: string
	withThumbs?: boolean
}

export const Carousel: FC<CarouselProps> = props => {
	const { mediaItems, withThumbs = true } = props

	const {
		setIndex,
		handleArrowClick,
		handleThumbArrowClick,
		currentThumbIndex,
		currentIndex,
	} = useCarousel({ numberOfImages: mediaItems.length })

	const getMediaItemsList = useCallback(
		(
			className?: string,
			forThumbs: boolean = false,
			customStyles?: CSSProperties,
		) => {
			return mediaItems.map((mediaItem, index) => (
				<li
					key={mediaItem.id}
					className={cn({
						[styles.carouselItem]: !forThumbs,
						[styles.item]: forThumbs,
					})}
					style={customStyles}
				>
					{forThumbs ? (
						<Image
							className={cn(className, {
								[styles.active]: forThumbs && currentIndex !== index,
							})}
							src={'http://localhost:5000' + mediaItem.url}
							alt={'thumbImage'}
							fill
							onClick={() => setIndex(index)}
						/>
					) : (
						<Image
							className={className}
							src={'http://localhost:5000' + mediaItem.url}
							alt={'carouselMediaFile'}
							width='0'
							height='0'
							sizes='100vw'
						/>
					)}
				</li>
			))
		},
		[mediaItems, currentIndex],
	)

	return (
		<div className={styles.carousel_wrapper}>
			<div className={styles.carousel}>
				<div className={styles.hoverContainer}>
					<div className={styles.prev}>
						<CarouselArrow
							className={styles.leftArrow}
							variant={'left'}
							clickHandler={() => handleArrowClick('prev')}
						/>
					</div>
					<div className={styles.next}>
						<CarouselArrow
							className={styles.rightArrow}
							variant={'right'}
							clickHandler={() => handleArrowClick('next')}
						/>
					</div>
				</div>
				<ul
					className={styles.mediaItem_list}
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{getMediaItemsList(styles.carouselImage, false, {
						minWidth: `100%`,
						maxWidth: `100%`,
					})}
				</ul>
			</div>
			{withThumbs && (
				<div className={styles.thumbs_carousel}>
					<div className={styles.prevThumbs}>
						<CarouselArrow
							className={styles.prevThumbsBtn}
							variant='left'
							clickHandler={() => handleThumbArrowClick('prev')}
						/>
					</div>
					<div className={styles.thumbs}>
						<ul
							className={styles.thumbsList}
							style={{
								transform: `translateX(-${currentThumbIndex * 100}%)`,
							}}
						>
							{getMediaItemsList(styles.item, true, {
								minWidth: `${100 / 6}%`,
								maxWidth: `${100 / 6}%`,
							})}
						</ul>
					</div>
					<div className={styles.nextThumbs}>
						<CarouselArrow
							className={styles.nextThumbsBtn}
							variant='right'
							clickHandler={() => handleThumbArrowClick('next')}
						/>
					</div>
				</div>
			)}
		</div>
	)
}
