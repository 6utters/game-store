import { FC } from 'react'
import styles from './Admin.module.scss'
import { Layout } from '@/widgets/layout'
import { AdminLayout } from '@/widgets/adminLayout'

const Admin: FC = () => {
	return (
		<Layout
			withFooter={false}
			withNavbar={false}
			title={'D&D Games | Admin panel'}
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
}

export default Admin
