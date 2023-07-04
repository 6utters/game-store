import { FC, memo, useState } from 'react'
import { GameMedia } from '@/entities/Game'
import { useCarousel } from '../../lib/useCarousel'
import { CarouselArrow } from '../carouselArrow/CarouselArrow'
import { CarouselList } from '../carouselList/CarouselList'
import { CarouselThumbList } from '../carouselThumbList/CarouselThumbList'
import cn from 'classnames'

import styles from './Carousel.module.scss'

interface CarouselProps {
	className?: string
	mediaItems: GameMedia[]
	title?: string
	withThumbs?: boolean
}

export const Carousel: FC<CarouselProps> = memo(props => {
	const { className, mediaItems, withThumbs = true } = props
	const [mouseOver, setMouseOver] = useState(false)

	const {
		setIndex,
		handleArrowClick,
		handleThumbArrowClick,
		currentThumbRowIndex,
		currentIndex,
	} = useCarousel({ numberOfItems: mediaItems.length })

	return (
		<div className={cn(styles.carousel_wrapper, className)}>
			<div
				className={styles.carousel}
				onMouseEnter={() => setMouseOver(true)}
				onMouseLeave={() => setMouseOver(false)}
			>
				<div className={cn(styles.hoverContainer)}>
					<div
						className={cn(styles.prev_panel, {
							[styles.hover_over]: mouseOver,
						})}
					>
						<CarouselArrow
							variant={'left'}
							clickHandler={() => handleArrowClick('prev')}
						/>
					</div>
					<div
						className={cn(styles.next_panel, {
							[styles.hover_over]: mouseOver,
						})}
					>
						<CarouselArrow
							variant={'right'}
							clickHandler={() => handleArrowClick('next')}
						/>
					</div>
				</div>
				<CarouselList mediaItems={mediaItems} currentIndex={currentIndex} />
			</div>
			{withThumbs && (
				<div className={styles.thumbs_carousel}>
					<CarouselArrow
						className={styles.thumbs_nav_btn}
						variant='left'
						clickHandler={() => handleThumbArrowClick('prev')}
					/>
					<div className={styles.thumb_list_wrapper}>
						<CarouselThumbList
							currentIndex={currentIndex}
							currentThumbRowIndex={currentThumbRowIndex}
							mediaItems={mediaItems}
							setIndex={setIndex}
						/>
					</div>
					<CarouselArrow
						className={styles.thumbs_nav_btn}
						variant='right'
						clickHandler={() => handleThumbArrowClick('next')}
					/>
				</div>
			)}
		</div>
	)
})
