import { FC, memo } from 'react'
import { BASKET_ROUTE } from '@/shared/consts'
import { GameSchema } from '@/entities/Game'

import styles from './PurchaseDetails.module.scss'

interface PurchaseDetailsProps {
	game?: GameSchema
}

export const PurchaseDetails: FC<PurchaseDetailsProps> = memo(({ game }) => {
	if (!game) return null

	return (
		<div className={styles.container}>
			<div className={styles.gameName}>
				<p>{game?.gameName}</p>
			</div>
			<p>base game</p>
			<div className={styles.gamePrice}>
				<p>{game.gamePrice - 0.01}$</p>
			</div>
			<div className={styles.buttons}>
				<button className={styles.buyBtn}>
					<p>get</p>
				</button>
				{addToCartBtn ? (
					<button
						className={styles.cartBtn}
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
				<div className={styles.purchaseInfo}>
					<div className={styles.infoItem}>
						<p>Developer</p>
						<h4>{game.gameInfo.developer}</h4>
					</div>
					<div className={styles.infoItem}>
						<p>Publisher</p>
						<h4>{game.gameInfo.publisher}</h4>
					</div>
					<div className={styles.infoItem}>
						<p>Release Date</p>
						<h4>{game.gameInfo.releaseDate}</h4>
					</div>
				</div>
			</div>
		</div>
	)
})

