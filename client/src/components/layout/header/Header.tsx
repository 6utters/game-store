import { FC } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import logoSvg from '../../../shared/assets/svgs/sword-svgrepo-com.svg'
import Link from 'next/link'
import { navigationLinks } from './header-links'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { STORE_ROUTE } from '@/shared/consts'

const Header: FC = () => {
	const router = useRouter()
	return (
		<div className={styles.header}>
			<div className={styles.left_nav}>
				<div className={styles.logo}>
					<Link href={STORE_ROUTE}>
						<Image
							alt={'img'}
							src={logoSvg}
							height={35}
							width={35}
							className={styles.logoImg}
						/>
						<p>
							<span>D</span>&<span>D</span> Games
						</p>
					</Link>
				</div>
				<div className={styles.nav_links}>
					{navigationLinks.map(link => (
						<Link
							className={cn({
								[styles.active_link]: link.href == router.asPath,
							})}
							key={'navbar' + link.id}
							href={link.href}
						>
							{link.title}
						</Link>
					))}
				</div>
			</div>
			{/*<AuthNavbar />*/}
			{/*<UserMenu />*/}
			{/*<BurgerNavbar />*/}
		</div>
	)
}

export default Header
