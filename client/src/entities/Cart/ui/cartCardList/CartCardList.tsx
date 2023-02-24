import { FC } from 'react'
import { GameSchema } from '@/entities/Game'
import { CartCard } from '../cartCard/CartCard'

import styles from './CartCardList.module.scss'

interface CartCardListProps {
	games: GameSchema[]
}

export const CartCardList: FC<CartCardListProps> = ({ games }) => {
	return (
		<div className={styles.cartCards}>
			{games.map(game => (
				<CartCard key={game.id} game={game} />
			))}
		</div>
	)
}
