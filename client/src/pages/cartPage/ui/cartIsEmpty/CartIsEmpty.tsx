import { FC, memo } from 'react'
import Link from 'next/link'

import { STORE_ROUTE } from '@/shared/consts'
import { Logo } from '@/shared/ui'

import styles from './CartIsEmpty.module.scss'

export const CartIsEmpty: FC = memo(() => {
	return (
		<div className={styles.cartIsEmpty}>
			<Logo size={50} />
			<h2>Your cart is empty</h2>
			<Link className={styles.link} href={STORE_ROUTE}>
				Shop for Games & Apps
			</Link>
		</div>
	)
})
