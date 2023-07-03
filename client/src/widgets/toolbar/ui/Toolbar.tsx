import { FC, memo } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import { BASKET_ROUTE } from '@/shared/consts'
import { Search } from '@/widgets/search'
import { getCartGames } from '@/entities/Cart/model/selectors/getCartGames/getCartGames'

import styles from './Toolbar.module.scss'

export const Toolbar: FC = memo(() => {
	const cartGames = useSelector(getCartGames)

	return (
		<div className={styles.container}>
			<nav data-testid='toolbar' className={styles.toolbar}>
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
									Basket <span>{cartGames.length > 0 && cartGames.length}</span>
								</Link>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
})
