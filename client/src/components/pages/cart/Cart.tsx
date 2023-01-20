import { FC, useEffect } from 'react'
import styles from './Cart.module.scss'
import Navbar from '../store/navbar/Navbar'
import logoSvg from '../../../shared/assets/svgs/sword-svgrepo-com.svg'
import Image from 'next/image'
import Link from 'next/link'
import { STORE_ROUTE } from '@/shared/consts'
import { Layout } from '@/shared/ui'
import { useAppDispatch } from '@/hooks/redux'
import { fetchCartGames } from '@/store/reducers/cartReducer/cartAC'

const Cart: FC = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchCartGames())
	}, [])
	// const { cartGames } = useAppSelector(state => state.cart)
	// const totalPrice = cartGames.reduce((acc, game) => {
	// 	return acc + game.gamePrice
	// }, 0)

	// TODO: realize discount logic
	const discount = 0
	// const subtotal = totalPrice - discount

	return (
		<Layout title={'D&D Games | Your Cart'} withNavbar withFooter>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.title}>
					<h1>My Cart</h1>
				</div>
				{/*{cartGames.length ? (*/}
				<div className={styles.content}>
					<div className={styles.cart_games}>
						{/*{cartGames.map(game => (*/}
						{/*	<CartItem key={game.id} {...game} />*/}
						{/*))}*/}
					</div>
					<div className={styles.cart_purchase}>
						<h2>Games and Apps Summary</h2>
						<div className={styles.main}>
							<div className={styles.property}>
								<p>Price</p>
								{/*<p>${totalPrice}</p>*/}
							</div>
							<div className={styles.property}>
								<p>Sale Discount</p>
								<p>-{discount}</p>
							</div>
							<div className={styles.property}>
								<p>Taxes</p>
								<h5>Calculated at Checkout</h5>
							</div>
						</div>
						<div className={styles.subtotal}>
							<p>Subtotal</p>
							{/*<p>${subtotal}</p>*/}
						</div>
						<button>Check Out</button>
					</div>
				</div>
				) : (
				<div className={styles.no_games}>
					<Image
						alt={'img'}
						src={logoSvg}
						height={50}
						width={50}
						className={styles.logoImg}
					/>
					<h2>Your cart is empty</h2>
					<Link className={styles.link} href={STORE_ROUTE}>
						Shop for Games & Apps
					</Link>
				</div>
				{/*)}*/}
			</div>
		</Layout>
	)
}

export default Cart
