import { FC } from 'react'
import styles from './Navbar.module.scss'
import Search from './Search/Search'
import Link from 'next/link'
import { BASKET_ROUTE } from '../../../../utils/constants'

const Navbar: FC = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbar__content}>
				<div className={styles.navbar__left}>
					<Search />
					<div className={styles.navbar__links}>
						<Link href={'/'}>
							<a className={styles.activeLink}>Browse</a>
						</Link>
						<Link href={'/'}>
							<a>News</a>
						</Link>
					</div>
				</div>
				<div className={styles.navbar__right}>
					<div className={styles.buttons}>
						<button>
							<Link href={'/wishlist'}>
								<a>Wishlist</a>
							</Link>
						</button>
						<button>
							<Link href={BASKET_ROUTE}>
								<a>Cart</a>
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
