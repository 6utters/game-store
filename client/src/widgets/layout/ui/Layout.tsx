import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '@/widgets/navbar'
import { Footer } from '@/shared/ui'

import styles from './Layout.module.scss'
import { Toolbar } from '@/widgets/toolbar'

interface LayoutProps {
	children: ReactNode
	title: string
	withNavbar?: boolean
	withFooter?: boolean
	withToolbar?: boolean
}

export const Layout: FC<LayoutProps> = props => {
	const {
		withFooter = true,
		withNavbar = true,
		withToolbar = true,
		title,
		children,
	} = props
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			{withNavbar && <Navbar />}
			{withToolbar && <Toolbar />}
			<main id={'main'}>
				<div className={styles.container}>
					<div className={styles.content}>{children}</div>
				</div>
			</main>
			{withFooter && <Footer />}
		</>
	)
}
