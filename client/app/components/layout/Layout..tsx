import { FC, PropsWithChildren, useEffect } from 'react'
import Header from './header/Header'
import Head from 'next/head'
import { useAppDispatch } from '../../hooks/redux'
import { checkAuth } from '../../store/reducers/userReducer/userAC'

const Layout: FC<PropsWithChildren<{ title: string; showHeader: boolean }>> = ({
	children,
	title,
	showHeader,
}) => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(checkAuth())
		}
	}, [])

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main id={'game_store'}>
				{showHeader && <Header />}
				<div className={'content-wrapper'}>{children}</div>
			</main>
		</>
	)
}

export default Layout
