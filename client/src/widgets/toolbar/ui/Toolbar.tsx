import { FC, memo } from 'react'
import Search from '@/shared/ui/Search/Search'
import Link from 'next/link'
import { BASKET_ROUTE } from '@/shared/consts'

import styles from './Toolbar.module.scss'

export const Toolbar: FC = memo(() => {
	// const { data: cartGames } = cartApi.useFetchCartQuery()
	//
	// const showCount = (cartGames: ICartGame[] | undefined) => {
	// 	if (cartGames) {
	// 		return cartGames.length ? cartGames.length : ''
	// 	}
	// }

	return (
		<nav className={styles.toolbar}>
			<div className={styles.content}>
				<div className={styles.left}>
					<Search />
					<div className={styles.links}>
						<Link href={'/'}>Discover</Link>
						<Link href={'/'} className={styles.activeLink}>
							Browse
						</Link>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.buttons}>
						<button>
							<Link href={BASKET_ROUTE}>
								{/*Cart <span>{showCount(cartGames?.games)}</span>*/}
							</Link>
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
})
