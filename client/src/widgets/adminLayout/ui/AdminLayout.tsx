import { FC, ReactNode } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { adminLayoutLinks } from './adminLayoutLinks'
import cn from 'classnames'

import styles from './AdminLayout.module.scss'

interface AdminLayoutProps {
	children: ReactNode
}

export const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
	const router = useRouter()
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.sidebar}>
					<div className={styles.links}>
						{adminLayoutLinks.map(link => (
							<div key={link.id} className={styles.link}>
								<Link
									href={link.href}
									className={cn({
										[styles.active]: link.href === router.asPath,
									})}
								>
									<link.icon className={styles.icon} />
									<p>{link.title}</p>
								</Link>
							</div>
						))}
					</div>
				</div>
				<div className={styles.main_block}>{children}</div>
			</div>
		</div>
	)
}
