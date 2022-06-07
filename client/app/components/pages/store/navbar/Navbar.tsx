import { FC } from 'react'
import styles from './Navbar.module.scss'
import Search from './Search/Search'
import Link from 'next/link'

const Navbar: FC = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbar__content}>
				<div className={styles.navbar__left}>
					<Search />
					<div className={styles.navbar__links}>
						<Link href={'/'}>
							<a>Browse</a>
						</Link>
					</div>
				</div>
				<div className={styles.navbar__right}>right</div>
			</div>
		</div>
	)
}

export default Navbar
