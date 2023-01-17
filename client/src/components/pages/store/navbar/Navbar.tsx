import { FC, memo } from 'react'
import styles from './Navbar.module.scss'
import Search from './Search/Search'
import Link from 'next/link'
import { BASKET_ROUTE } from '../../../../utils/constants'
import { cartApi } from '../../../../store/api/cart.api'
import { ICartGame } from '../../../../models/ICartGame'

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
						<Link href={'/'}>
							<a>Discover</a>
						</Link>
						<Link href={'/'}>
							<a className={styles.activeLink}>Browse</a>
						</Link>
					</div>
				</div>
				<div className={styles.navbar__right}>
					<div className={styles.buttons}>
						<button>
							<Link href={BASKET_ROUTE}>
								<a>
									Cart <span>{showCount(cartGames?.games)}</span>
								</a>
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
})

export default Navbar
