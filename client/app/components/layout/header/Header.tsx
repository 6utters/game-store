import { FC } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import logoSvg from '../../../assets/svgs/sword-svgrepo-com.svg'
import Link from 'next/link'
import { STORE_ROUTE } from '../../../utils/constants'
import { navigationLinks } from './header-links'
import cn from 'classnames'
import { useRouter } from 'next/router'
import AuthNavbar from './authNavbar/AuthNavbar'
import { useAppSelector } from '../../../hooks/redux'

const Header: FC = () => {
	const { isAuth } = useAppSelector((state) => state.user)
	const router = useRouter()
	return (
		<div className={styles.header}>
			<div className={styles.right_nav}>
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
					{navigationLinks.map((link) => (
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
			<AuthNavbar isAuth={isAuth} />
		</div>
	)
}

export default Header
