import { FC, useEffect, useState } from 'react'
import styles from './BurgerNanbar.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { navigationLinks } from '../header-links'
import Link from 'next/link'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../../../utils/constants'
import { FaUser } from 'react-icons/fa'
import cn from 'classnames'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { logout } from '../../../../store/reducers/userReducer/userAC'

const BurgerNavbar: FC = () => {
	const dispatch = useAppDispatch()
	const [isShown, setIsShown] = useState(false)
	// const { isAuth, user } = useAppSelector((state) => state.user)
	const { isAuth, user } = useAppSelector((state) => state.auth)

	useEffect(() => {
		if (isShown) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'initial'
		}
	}, [isShown])

	const logoutHandler = () => {
		dispatch(logout())
		setIsShown(false)
	}

	return (
		<>
			<button
				className={styles.burger_button}
				onClick={() => setIsShown(!isShown)}
			>
				<GiHamburgerMenu />
			</button>
			{/*{isShown && (*/}
			<div
				className={cn(styles.menu, {
					[styles.active]: isShown,
				})}
			>
				<div className={styles.darken} />
				<div className={styles.content}>
					<div className={styles.links}>
						{navigationLinks.map((link) => (
							<Link key={'navbar-m' + link.id} href={link.href}>
								<a className={styles.link}>{link.title}</a>
							</Link>
						))}
					</div>
					<div className={styles.auth}>
						{isAuth ? (
							<>
								<div className={styles.user}>
									<div className={styles.user_symb}>
										<FaUser className={styles.login_symb} />
										<span className={styles.online}></span>
									</div>
									<p>{user?.userName}</p>
								</div>
								<button className={styles.login_btn} onClick={logoutHandler}>
									<p>log out</p>
								</button>
							</>
						) : (
							<>
								<button className={styles.login_btn}>
									<Link href={LOGIN_ROUTE}>
										<a>
											<FaUser className={styles.login_symb} />
											<p>Log in</p>
										</a>
									</Link>
								</button>
								<button className={styles.signup_btn}>
									<Link href={REGISTRATION_ROUTE}>
										<a>
											<p>Sign in</p>
										</a>
									</Link>
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default BurgerNavbar