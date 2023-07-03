import { FC, memo } from 'react'
import { Layout } from '@/widgets/layout'
import styles from './AboutPage.module.scss'

const AboutPage: FC = memo(() => (
	<Layout title={'D&D Games | AboutPage page'}>
		<div className={styles.container}>About Page</div>
	</Layout>
))

export default AboutPage
