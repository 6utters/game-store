import { FC } from 'react'
import styles from './CartItem.module.scss'
import { useAppDispatch } from '../../../../hooks/redux'
import Link from 'next/link'
import { convertImagePath } from '@/shared/lib'
import { GAME_ROUTE } from '@/shared/consts'
import { GameSchema } from '@/entities/Game'
import { removeGameFromCart } from '@/features/cartInteraction'

const CartItem: FC<GameSchema> = game => {
	const dispatch = useAppDispatch()
	const removeHandler = (gameId: number) => {
		dispatch(removeGameFromCart({ gameId }))
	}

	return (
		<div className={styles.card}>
			<div className={styles.card__image}>
				<img
					src={'http://localhost:5000' + convertImagePath(game.gameImage)}
					alt='Game Image'
				/>
			</div>
			<div className={styles.card__content}>
				<div className={styles.game_name}>
					<Link href={GAME_ROUTE + '/' + `${game.id}`}>{game.gameName}</Link>
				</div>
				<div className={styles.right}>
					<div className={styles.game_price}>${game.gamePrice - 0.01}</div>
					<button
						className={styles.remove_btn}
						onClick={() => removeHandler(game.id)}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem
