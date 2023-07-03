import { FC, useState } from 'react'
import { StarsRating } from '@/shared/ui'

import styles from './Rating.module.scss'
import { BsFillPeopleFill } from 'react-icons/bs'

interface RatingProps {
	numberOfRates?: number
	rate?: number
	onRateHandle: (numberOfStars: number) => void
}

export const Rating: FC<RatingProps> = props => {
	const { rate, onRateHandle, numberOfRates } = props

	const [numberOfStars, setNumberOfStars] = useState(rate)

	const onSelectStars = (starNumber: number) => {
		setNumberOfStars(starNumber)
		onRateHandle(starNumber)
	}

	return (
		<div className={styles.rating}>
			<div className={styles.stars}>
				<StarsRating selectedStars={numberOfStars} onSelect={onSelectStars} />
				<div className={styles.card}>
					<span>{rate}</span>
				</div>
			</div>
			<div className={styles.people_ranked}>
				<BsFillPeopleFill />
				<div className={styles.card}>
					<span>{numberOfRates || 0}</span>
				</div>
			</div>
		</div>
	)
}
