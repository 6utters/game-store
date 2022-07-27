import { FC, memo } from 'react'
import styles from './GameCard.module.scss'
import { useRouter } from 'next/router'
import { GAME_ROUTE } from '../../../../utils/constants'
import { convertImage } from '../../../../utils/helpers'

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
					src={'http://localhost:5000' + convertImage(image)}
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
