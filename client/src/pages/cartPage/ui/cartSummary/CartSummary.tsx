import { FC, memo } from 'react'
import styles from './CartSummary.module.scss'

interface CartSummaryProps {
	totalPrice?: number
	discount: number
}

export const CartSummary: FC<CartSummaryProps> = memo(props => {
	const { totalPrice, discount } = props

	const subtotal = totalPrice && totalPrice - discount

	return (
		<div className={styles.cartSummary}>
			<h2 className={styles.title}>Games and Apps Summary</h2>
			<div className={styles.properties}>
				<div className={styles.property}>
					<p>Price</p>
					<p>${totalPrice}</p>
				</div>
				<div className={styles.property}>
					<p>Sale Discount</p>
					<p>{discount}</p>
				</div>
				<div className={styles.property}>
					<p>Taxes</p>
					<h5>Calculated at Checkout</h5>
				</div>
			</div>
			<div className={styles.subtotal}>
				<h3>Subtotal</h3>
				<p>${subtotal}</p>
			</div>
			<button className={styles.checkout}>Check Out</button>
		</div>
	)
})
