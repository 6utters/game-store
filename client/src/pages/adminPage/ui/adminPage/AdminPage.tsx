import { FC, memo } from 'react'

import { Layout } from '@/widgets/layout'
import { AdminLayout } from '@/widgets/adminLayout'

import styles from './AdminPage.module.scss'
import { Toolbar } from '@/widgets/toolbar'

const AdminPage: FC = memo(() => {
	return (
		<Layout
			withFooter={false}
			withNavbar
			title={'D&D Games | AdminPage panel'}
		>
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
