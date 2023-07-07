import { FC, memo } from 'react'
import { GameSchema } from '@/entities/Game'
import { Skeleton } from '@/shared/ui'
import { AddToCartButton } from '@/features/userCart'

import styles from './PurchaseDetails.module.scss'

interface PurchaseDetailsProps {
	game?: GameSchema
}

export const PurchaseDetails: FC<PurchaseDetailsProps> = memo(({ game }) => {
	if (!game)
		return (
			<aside className={styles.container}>
				<Skeleton width={'100%'} height={'20rem'} border={'0.25rem'} />
			</aside>
		)

	return (
		<aside className={styles.container}>
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
				<AddToCartButton className={styles.cart_btn} game={game} />
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
		</aside>
	)
})
