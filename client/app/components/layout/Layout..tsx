import { FC, PropsWithChildren } from 'react'
import Header from './header/Header'
import Head from 'next/head'
import Footer from './footer/Footer'

interface ILayoutProps {
	title: string
	showHeader: boolean
	showFooter: boolean
}

const Layout: FC<PropsWithChildren<ILayoutProps>> = ({
	children,
	title,
	showHeader,
	showFooter,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			{showHeader && <Header />}
			<main id={'main'}>
				<div>{children}</div>
			</main>
			{showFooter && <Footer />}
		</>
	)
}

export default Layout
