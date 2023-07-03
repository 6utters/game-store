import { FC, memo, useState } from 'react'
import cn from 'classnames'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

import styles from './StarsRating.module.scss'

const stars = [1, 2, 3, 4, 5]

interface StarsRatingProps {
	className?: string
	onSelect?: (numberOfStars: number) => void
	selectedStars?: number
}

export const StarsRating: FC<StarsRatingProps> = memo(props => {
	const { className, selectedStars = 0, onSelect } = props

	const [currentStars, setCurrentStars] = useState(selectedStars)
	const [isHovered, setIsHovered] = useState(false)

	const onClick = (starNumber: number) => () => {
		onSelect?.(starNumber)
		setCurrentStars(starNumber)
	}

	const onHover = (starNumber: number) => () => {
		setIsHovered(true)
		setCurrentStars(starNumber)
	}

	const onLeave = () => {
		setIsHovered(false)
		setCurrentStars(selectedStars)
	}

	return (
		<div className={cn(styles.stars_rating, className)}>
			{stars.map((starNumber, index) => {
				if (currentStars - (index + 1) < 0 && currentStars - (index + 1) > -1) {
					return (
						<BsStarHalf
							key={starNumber}
							className={cn({
								[styles.hovered]: currentStars >= starNumber,
								[styles.hoveredActive]: isHovered,
							})}
							onMouseLeave={onLeave}
							onMouseEnter={onHover(starNumber)}
							onClick={onClick(starNumber)}
						/>
					)
				} else if (currentStars >= index + 1) {
					return (
						<BsStarFill
							key={starNumber}
							className={cn({
								[styles.hovered]: currentStars >= starNumber,
								[styles.hoveredActive]: isHovered,
							})}
							onMouseLeave={onLeave}
							onMouseEnter={onHover(starNumber)}
							onClick={onClick(starNumber)}
						/>
					)
				} else {
					return (
						<BsStar
							key={starNumber}
							className={cn({
								[styles.hovered]: currentStars >= starNumber,
							})}
							onMouseLeave={onLeave}
							onMouseEnter={onHover(starNumber)}
							onClick={onClick(starNumber)}
						/>
					)
				}
			})}
		</div>
	)
})
