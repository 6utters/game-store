import { FC } from 'react'
import styles from './CartItem.module.scss'
import { IGame } from '../../../../models/IGame'
import { addGameToCart } from '../../../../store/reducers/cartReducer/cartAC'
import { useAppDispatch } from '../../../../hooks/redux'
import Link from 'next/link'
import { convertImagePath } from '@/shared/lib'
import { GAME_ROUTE } from '@/shared/consts'

const CartItem: FC<IGame> = game => {
	const dispatch = useAppDispatch()
	const removeHandler = (gameId: string) => {
		dispatch(addGameToCart(gameId))
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
						onClick={() => removeHandler(String(game.id))}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem