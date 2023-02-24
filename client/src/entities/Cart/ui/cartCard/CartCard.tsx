import { FC, memo, useCallback } from 'react'
import Link from 'next/link'

import { GameSchema } from '@/entities/Game'
import { removeGameFromCart } from '@/features/cartInteraction'

import { convertImagePath } from '@/shared/lib'
import { useAppDispatch } from '@/shared/lib/hooks'
import { GAME_ROUTE } from '@/shared/consts'

import styles from './CartCard.module.scss'

interface CartCardProps {
	game: GameSchema
}

export const CartCard: FC<CartCardProps> = memo(({ game }) => {
	const dispatch = useAppDispatch()

	const removeHandler = useCallback(
		(gameId: number) => {
			dispatch(removeGameFromCart({ gameId }))
		},
		[dispatch],
	)

	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<img
					src={'http://localhost:5000' + convertImagePath(game.gameImage)}
					alt='Game Image'
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.title}>
					<Link href={GAME_ROUTE + '/' + `${game.id}`}>{game.gameName}</Link>
				</div>
				<div className={styles.rightSide}>
					<div className={styles.price}>${game.gamePrice - 0.01}</div>
					<button
						className={styles.remove}
						onClick={() => removeHandler(game.id)}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	)
})
