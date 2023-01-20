import { FC, memo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import { Logo } from '@/shared/ui'

import { navLinks } from './navbarLinks'

import styles from './Navbar.module.scss'
import { UserMenu } from '@/widgets/navbar'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
	const router = useRouter()
	return (
		<nav className={cn(styles.navbar, className)}>
			<div className={styles.navigation}>
				<Logo size={32} />
				<div className={styles.links}>
					{navLinks.map(link => (
						<Link
							key={`nav-${link.id}`}
							href={link.href}
							className={cn({ [styles.active]: link.href === router.asPath })}
						>
							{link.title}
						</Link>
					))}
				</div>
			</div>
			<UserMenu />
		</nav>
	)
})
