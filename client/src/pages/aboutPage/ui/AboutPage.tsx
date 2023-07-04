import { FC, memo } from 'react'
import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
import styles from './AboutPage.module.scss'

const AboutPage: FC = memo(() => (
	<MainLayout title={'D&D Games | AboutPage page'}>
		<div className={styles.container}>About Page</div>
	</MainLayout>
))

export default AboutPage
