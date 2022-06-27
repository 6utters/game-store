import { FC, useEffect, useState } from 'react'
import styles from './Purchase.module.scss'
import { IGame } from '../../../../models/IGame'
import CartService from '../../../../services/cart.service'
import { useAppSelector } from '../../../../hooks/redux'
import { useRouter } from 'next/router'
import { BASKET_ROUTE } from '../../../../utils/constants'

const Purchase: FC<IGame> = (game) => {
	const { cartGames } = useAppSelector((state) => state.cart)
	useEffect(() => {
		if (cartGames.some((g) => g.gameName === game.gameName)) {
			setAddToCartBtn(true)
		}
	}, [cartGames])

	const router = useRouter()
	const [addToCartBtn, setAddToCartBtn] = useState<boolean>(false)
	const addToCart = (gameName: string) => {
		CartService.addToCart(gameName).then(() => setAddToCartBtn(!addToCartBtn))
	}

	return (
		<div className={styles.container}>
			<div className={styles.game_name}>
				<p>{game.gameName}</p>
			</div>
			<div className={styles.game_price}>
				<p>{game.gamePrice}$</p>
			</div>
			<div className={styles.buttons}>
				<button className={styles.buy_btn}>
					<p>get</p>
				</button>
				{addToCartBtn ? (
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
			</div>
		</div>
	)
}

export default Purchase
