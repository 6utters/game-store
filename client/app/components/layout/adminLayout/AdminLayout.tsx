import { FC, PropsWithChildren } from 'react'
import styles from './AdminLayout.module.scss'
import SidebarPanel from './SidebarPanel/SidebarPanel'
import { useAppSelector } from '../../../hooks/redux'

const AdminLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user, isLoading } = useAppSelector((state) => state.user)
	const userRoles = user && user.roles
	const adminRole =
		userRoles && userRoles.find((role) => role.value === 'ADMIN')

	if (isLoading) {
		return <div className={styles.container}>Laoding</div>
	}

	return (
		<>
			{adminRole ? (
				<div className={styles.container}>
					<div className={styles.content}>
						<SidebarPanel />
						<div className={styles.main_block}>{children}</div>
					</div>
				</div>
			) : (
				<div className={styles.error}>
					<h1>This page is not allowed for an ordinary user :(</h1>
				</div>
			)}
		</>
	)
}

export default AdminLayout
