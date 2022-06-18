import { FC } from 'react'
import styles from './GameCard.module.scss'

interface IGameCardProps {
	name: string
	price: number
	image: string
}

const GameCard: FC<IGameCardProps> = ({ name, price, image }) => {
	const actualPrice = price - 0.01

	return (
		<div className={styles.card}>
			<div className={styles.card__image}>
				<img src={'http://localhost:5000/' + image} alt='gameImage' />
			</div>
			<div className={styles.card__name}>
				<p>{name}</p>
			</div>
			<div className={styles.card__price}>
				<p>{'$' + actualPrice}</p>
			</div>
		</div>
	)
}

export default GameCard
