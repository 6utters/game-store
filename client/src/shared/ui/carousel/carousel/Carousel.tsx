import React, { CSSProperties, FC, memo, useCallback, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { BsPlayFill } from 'react-icons/bs'

import { GameMedia } from '@/entities/Game'
import { Player } from '@/shared/ui'

import { useCarousel } from '@/shared/lib/hooks'
import { CarouselArrow } from '@/shared/ui/carousel/carouselArrow/CarouselArrow'

import styles from './Carousel.module.scss'

interface CarouselProps {
	mediaItems: GameMedia[]
	title?: string
	withThumbs?: boolean
}

export const Carousel: FC<CarouselProps> = memo(props => {
	const { mediaItems, withThumbs = true } = props
	const [mouseOver, setMouseOver] = useState(false)

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
						mediaItem.type === 'image' ? (
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
							<>
								{currentIndex !== index && (
									<span className={styles.play_icon}>
										<BsPlayFill />
									</span>
								)}
								<video
									className={cn(styles.video_item, {
										[styles.active]: forThumbs && currentIndex !== index,
									})}
									src={'http://localhost:5000' + mediaItem.url + '#t=8'}
									onClick={() => setIndex(index)}
								/>
							</>
						)
					) : mediaItem.type === 'image' ? (
						<Image
							className={className}
							src={'http://localhost:5000' + mediaItem.url}
							alt={'carouselMediaFile'}
							width='0'
							height='0'
							sizes='100vw'
						/>
					) : (
						<Player
							source={'http://localhost:5000' + mediaItem.url}
							className={''}
						/>
					)}
				</li>
			))
		},
		[mediaItems, currentIndex],
	)

	return (
		<div className={styles.carousel_wrapper}>
			<div
				className={styles.carousel}
				onMouseEnter={() => setMouseOver(true)}
				onMouseLeave={() => setMouseOver(false)}
			>
				<div className={cn(styles.hoverContainer)}>
					<div
						className={cn(styles.prev, {
							[styles.hover_over]: mouseOver,
						})}
					>
						<CarouselArrow
							className={styles.leftArrow}
							variant={'left'}
							clickHandler={() => handleArrowClick('prev')}
						/>
					</div>
					<div
						className={cn(styles.next, {
							[styles.hover_over]: mouseOver,
						})}
					>
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
})
