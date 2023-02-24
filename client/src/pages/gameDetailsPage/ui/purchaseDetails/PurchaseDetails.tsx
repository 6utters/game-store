import { FC, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import { GameSchema } from '@/entities/Game'
import { getCartGames } from '@/entities/Cart/model/selectors/getCartGames/getCartGames'

import { addGameToCart } from '@/features/cartInteraction'
import { useAppDispatch } from '@/shared/lib/hooks'
import { BASKET_ROUTE } from '@/shared/consts'
import { Spinner } from '@/shared/ui'

import styles from './PurchaseDetails.module.scss'

interface PurchaseDetailsProps {
	game?: GameSchema
}

export const PurchaseDetails: FC<PurchaseDetailsProps> = ({ game }) => {
	const dispatch = useAppDispatch()
	const router = useRouter()
	const cartGames = useSelector(getCartGames)

	const isGameInCart = useMemo(() => {
		return cartGames.some(cartGame => cartGame.gameId === game?.id)
	}, [cartGames, game])

	const addToCart = useCallback(
		(gameName: string) => {
			dispatch(addGameToCart({ gameName }))
		},
		[dispatch],
	)

	if (!game) return <Spinner />

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<p>{game.gameName}</p>
			</div>
			<p>base game</p>
			<div className={styles.price}>
				<p>{game.gamePrice - 0.01}$</p>
			</div>
			<div className={styles.buttons}>
				<button className={styles.buy_btn}>
					<p>get</p>
				</button>
				{isGameInCart ? (
					<button
						className={styles.cart_btn}
						onClick={() => router.push(BASKET_ROUTE)}
					>
						<p>View in cart</p>
					</button>
				) : (
					<button
						className={styles.cart_btn}
						onClick={() => addToCart(game.gameName)}
					>
						<p>add to cart</p>
					</button>
				)}
				<div className={styles.purchase_info}>
					<div className={styles.info_item}>
						<p>Developer</p>
						<h4>{game.gameInfo.developer}</h4>
					</div>
					<div className={styles.info_item}>
						<p>Publisher</p>
						<h4>{game.gameInfo.publisher}</h4>
					</div>
					<div className={styles.info_item}>
						<p>Release Date</p>
						<h4>{game.gameInfo.releaseDate}</h4>
					</div>
				</div>
			</div>
		</div>
	)
}
