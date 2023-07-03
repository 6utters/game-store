import { FC, useCallback } from 'react'
import { useGetRating, useRate } from '@/features/gameRating/api/gameRatingApi'
import { Rating } from '@/entities/Rating'
import { Skeleton } from '@/shared/ui'

interface GameRatingProps {
	className?: string
	gameId: number
}

export const GameRating: FC<GameRatingProps> = ({ gameId, className }) => {
	const { data, isLoading } = useGetRating(gameId)
	const [rateGame] = useRate()

	const onRateHandle = useCallback(
		(numberOfStars: number) => {
			try {
				rateGame({
					gameId,
					rate: numberOfStars,
				})
			} catch (e) {
				console.log(e)
			}
		},
		[gameId, rateGame],
	)

	if (isLoading) {
		return <Skeleton width='100%' height={120} />
	}

	const averageRating =
		data?.length == 0
			? 0
			: data?.reduce((acc, item) => acc + item.rate / data.length, 0)

	return (
		<Rating
			rate={averageRating}
			onRateHandle={onRateHandle}
			numberOfRates={data?.length}
		/>
	)
}
