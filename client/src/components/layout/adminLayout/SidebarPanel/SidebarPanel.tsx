import { FC } from 'react'
import styles from './SidebarPanel.module.scss'
import { sidebarAdminLinks } from './sidebarAdminLinks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

const SidebarPanel: FC = () => {
	const router = useRouter()
	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{sidebarAdminLinks.map(link => (
					<div key={link.id} className={styles.link}>
						<Link href={link.href}>
							className=
							{cn({
								[styles.active]: link.href === router.asPath,
							})}
							<link.icon className={styles.icon} />
							<p>{link.title}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default SidebarPanel
