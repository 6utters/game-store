import { FC } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import logoSvg from '../../../shared/assets/svgs/sword-svgrepo-com.svg'
import Link from 'next/link'
import { navigationLinks } from './header-links'
import cn from 'classnames'
import { useRouter } from 'next/router'
import AuthNavbar from './authNavbar/AuthNavbar'
import BurgerNavbar from './burgerNavbar/BurgerNavbar'
import { STORE_ROUTE } from '@/shared/consts'

const Header: FC = () => {
	const router = useRouter()
	return (
		<div className={styles.header}>
			<div className={styles.left_nav}>
				<div className={styles.logo}>
					<Link href={STORE_ROUTE}>
						<a>
							<Image
								src={logoSvg}
								height={35}
								width={35}
								className={styles.logoImg}
							/>
							<p>
								<span>D</span>&<span>D</span> Games
							</p>
						</a>
					</Link>
				</div>
				<div className={styles.nav_links}>
					{navigationLinks.map(link => (
						<Link key={'navbar' + link.id} href={link.href}>
							<a
								className={cn({
									[styles.active_link]: link.href == router.asPath,
								})}
							>
								{link.title}
							</a>
						</Link>
					))}
				</div>
			</div>
			<AuthNavbar />
			<BurgerNavbar />
		</div>
	)
}

export default Header
