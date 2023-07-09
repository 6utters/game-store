import { FC, memo } from 'react'
import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
import styles from './NotFoundPage.module.scss'
import { Logo } from '@/shared/ui'

export const NotFoundPage: FC = memo(props => {
	return (
		<MainLayout title={'Not found'} withNavbar withToolbar withFooter>
			<main className={styles.not_found_page} data-testid={'NotFoundPage'}>
				<div className={styles.card}>
					<Logo size={32} />
					<h3 className={styles.title}>Nothing to look for here...</h3>
				</div>
			</main>
		</MainLayout>
	)
})
