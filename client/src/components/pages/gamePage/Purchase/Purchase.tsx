import { FC, useState } from 'react'
import styles from './Purchase.module.scss'
import { useRouter } from 'next/router'
import Spinner from '../../../ui/Spinner/Spinner'
import { BASKET_ROUTE } from '@/shared/consts'
import { GameSchema } from '@/entities/Game'
import { addGameToCart } from '@/features/cartInteraction'
import { useAppDispatch } from '@/shared/lib/hooks'

const Purchase: FC<{ game?: GameSchema }> = ({ game }) => {
	const dispatch = useAppDispatch()
	// const { cartGames } = useAppSelector(state => state.cart)
	// useEffect(() => {
	// 	dispatch(fetchCartGames())
	// }, [])

	const router = useRouter()
	const [addToCartBtn, setAddToCartBtn] = useState<boolean>(false)
	const addToCart = (gameName: string) => {
		// CartService.addToCart(gameName).then(() => setAddToCartBtn(!addToCartBtn))
		// dispatch(fetchCartGames())
		dispatch(addGameToCart({ gameName }))
	}

	// useEffect(() => {
	// 	if (cartGames.some(g => g.gameName === game?.gameName)) {
	// 		setAddToCartBtn(true)
	// 	}
	// }, [cartGames])

	return (
		<>
			{game ? (
				<div className={styles.container}>
					<div className={styles.game_name}>
						<p>{game.gameName}</p>
					</div>
					<p>base game</p>
					<div className={styles.game_price}>
						<p>{game.gamePrice - 0.01}$</p>
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
			) : (
				<Spinner />
			)}
		</>
	)
}

export default Purchase
