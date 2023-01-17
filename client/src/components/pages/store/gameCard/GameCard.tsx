import { FC, memo } from 'react'
import { useRouter } from 'next/router'
import { convertImagePath } from '@/shared/lib'
import styles from './GameCard.module.scss'
import { GAME_ROUTE } from '@/shared/consts'

interface IGameCardProps {
	name: string
	price: number
	image: string
	gameId: number
}

const GameCard: FC<IGameCardProps> = memo(({ name, price, image, gameId }) => {
	const router = useRouter()
	const actualPrice = price - 0.01

	return (
		<div
			className={styles.card}
			onClick={() => router.push(GAME_ROUTE + '/' + gameId)}
		>
			<div className={styles.card__image}>
				<img
					src={'http://localhost:5000' + convertImagePath(image)}
					alt='gameImage'
				/>
			</div>
			<div className={styles.card__name}>
				<p>{name}</p>
			</div>
			<div className={styles.card__price}>
				<p>{'$' + actualPrice}</p>
			</div>
		</div>
	)
})

export default GameCard
