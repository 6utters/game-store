import { FC, memo } from 'react'
import styles from './Navbar.module.scss'
import Search from '../../../../shared/ui/Search/Search'
import Link from 'next/link'
import { cartApi } from '../../../../store/api/cart.api'
import { ICartGame } from '../../../../models/ICartGame'
import { BASKET_ROUTE } from '@/shared/consts'

const Navbar: FC = memo(() => {
	const { data: cartGames } = cartApi.useFetchCartQuery()

	const showCount = (cartGames: ICartGame[] | undefined) => {
		if (cartGames) {
			return cartGames.length ? cartGames.length : ''
		}
	}

	return (
		<div className={styles.navbar}>
			<div className={styles.navbar__content}>
				<div className={styles.navbar__left}>
					<Search />
					<div className={styles.navbar__links}>
						<Link href={'/'}>Discover</Link>
						<Link className={styles.activeLink} href={'/'}>
							Browse
						</Link>
					</div>
				</div>
				<div className={styles.navbar__right}>
					<div className={styles.buttons}>
						<button>
							<Link href={BASKET_ROUTE}>
								Cart <span>{showCount(cartGames?.games)}</span>
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
})

export default Navbar
