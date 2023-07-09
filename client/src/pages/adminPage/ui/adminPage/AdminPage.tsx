import { FC, memo } from 'react'
import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
import { AdminLayout } from '@/shared/layouts/adminLayout/AdminLayout'

import styles from './AdminPage.module.scss'

export const AdminPage: FC = memo(() => {
	return (
		<MainLayout withFooter={false} title={'D&D Games | AdminPage panel'}>
			<AdminLayout>
				<div className={styles.container} data-testid={'AdminPage'}>
					<div className={styles.content}>
						<h3>Choose a panel to start The Creation...</h3>
					</div>
				</div>
			</AdminLayout>
		</MainLayout>
	)
})
