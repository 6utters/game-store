import { FC } from 'react'
import cn from 'classnames'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import styles from './CarouselArrow.module.scss'

interface CarouselArrowProps {
	className?: string
	variant: 'left' | 'right'
	clickHandler: () => void
}

export const CarouselArrow: FC<CarouselArrowProps> = props => {
	const { clickHandler, variant, className } = props

	const isLeft = variant === 'left'
	const isRight = !isLeft

	return (
		<button
			onClick={clickHandler}
			className={cn(styles.carouselArrow, className, {
				[styles.left]: isLeft,
				[styles.right]: isRight,
			})}
		>
			{isLeft ? <MdChevronLeft /> : <MdChevronRight />}
		</button>
	)
}
