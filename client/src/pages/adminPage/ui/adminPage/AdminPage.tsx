import { FC, memo } from 'react'

import { Layout } from '@/widgets/layout'
import { AdminLayout } from '@/widgets/adminLayout'

import styles from './AdminPage.module.scss'

const AdminPage: FC = memo(() => {
	return (
		<Layout withFooter={false} title={'D&D Games | AdminPage panel'}>
			<AdminLayout>
				<div className={styles.container}>
					<div className={styles.content}>
						<h3>Choose a panel to start The Creation...</h3>
					</div>
				</div>
			</AdminLayout>
		</Layout>
	)
})

export default AdminPage
