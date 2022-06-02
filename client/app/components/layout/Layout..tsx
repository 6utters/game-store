import { FC, PropsWithChildren } from 'react'
import Header from './header/Header'
import Head from 'next/head'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main id={'game_store'}>
				<Header />
				<div className={'content-wrapper'}>{children}</div>
			</main>
		</>
	)
}

export default Layout
