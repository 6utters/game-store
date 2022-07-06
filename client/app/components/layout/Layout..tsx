import { FC, PropsWithChildren, useEffect } from 'react'
import Header from './header/Header'
import Head from 'next/head'
import { useAppDispatch } from '../../hooks/redux'
import { checkAuth } from '../../store/reducers/userReducer/userAC'
import Footer from './footer/Footer'
import styles from './Layout.module.scss'

const Layout: FC<
	PropsWithChildren<{ title: string; showHeader: boolean; showFooter: boolean }>
> = ({ children, title, showHeader, showFooter }) => {
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
				<div className={styles.content_wrapper}>{children}</div>
				{showFooter && <Footer />}
			</main>
		</>
	)
}

export default Layout
