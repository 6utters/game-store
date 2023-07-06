import { FC, memo, useCallback } from 'react'
import Link from 'next/link'

import { GameSchema } from '@/entities/Game'

import { convertImagePath } from '@/shared/lib'
import { useAppDispatch } from '@/shared/lib/hooks'
import { GAME_ROUTE } from '@/shared/consts'

import Image from 'next/image'
import { removeGameFromCart } from '@/features/userCart/model/services/removeGameFromCart/removeGameFromCart'
import styles from './CartCard.module.scss'
import { SERVER_URL } from '@/shared/api'

interface CartCardProps {
	game: GameSchema
}

export const CartCard: FC<CartCardProps> = memo(({ game }) => {
	const dispatch = useAppDispatch()

	const removeHandler = useCallback(() => {
		dispatch(removeGameFromCart(game.id))
	}, [dispatch, game.id])

	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Image
					width='0'
					height='0'
					sizes='100vh'
					src={SERVER_URL + convertImagePath(game.gameImage)}
					alt='Game Image'
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.title}>
					<Link href={GAME_ROUTE + '/' + `${game.id}`}>{game.gameName}</Link>
				</div>
				<div className={styles.rightSide}>
					<div className={styles.price}>${game.gamePrice - 0.01}</div>
					<button className={styles.remove} onClick={removeHandler}>
						Remove
					</button>
				</div>
			</div>
		</div>
	)
})
