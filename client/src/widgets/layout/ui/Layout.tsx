import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '@/widgets/navbar'
import { Footer } from '@/shared/ui'

interface LayoutProps {
	children: ReactNode
	title: string
	withNavbar?: boolean
	withFooter?: boolean
}

export const Layout: FC<LayoutProps> = props => {
	const { withFooter, withNavbar, title, children } = props
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			{withNavbar && <Navbar />}
			<main id={'main'}>
				<div>{children}</div>
			</main>
			{withFooter && <Footer />}
		</>
	)
}
