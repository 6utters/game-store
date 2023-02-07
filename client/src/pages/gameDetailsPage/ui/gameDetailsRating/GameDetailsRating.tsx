import { FC, useEffect, useState } from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import { fetchFilteredGamesApi } from '@/features/fetchFilteredGameList/model/api/fetchGameList'

import styles from './GameDetailsRating.module.scss'

const GameDetailsRating: FC<{ gameId: number }> = ({ gameId }) => {
	const { data, isSuccess } = fetchFilteredGamesApi.useGetRatingQuery(gameId)
	const [rate] = fetchFilteredGamesApi.useRateMutation()
	const [rating, setRating] = useState(0)
	const [hoverRating, setHoverRating] = useState(0)

	useEffect(() => {
		setRating(data)
	}, [isSuccess])

	const clickHandler = async (value: number) => {
		setRating(value)
		rate({ gameId, rate: value })
	}

	return (
		<div className={styles.container}>
			{[...Array(5)].map((star, index) => {
				const ratingValue = index + 1
				return (
					<label key={index}>
						<input
							type='radio'
							name='rating'
							value={ratingValue}
							onClick={() => clickHandler(ratingValue)}
						/>
						<BsFillStarFill
							onMouseEnter={() => setHoverRating(ratingValue)}
							onMouseLeave={() => setHoverRating(0)}
							size={15}
							className={styles.star}
							color={
								ratingValue <= (hoverRating || rating) ? '#f3d349' : '#e4e5e9'
							}
						/>
					</label>
				)
			})}
		</div>
	)
}

export default GameDetailsRating