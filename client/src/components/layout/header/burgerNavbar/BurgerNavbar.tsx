import { FC, useEffect, useState } from 'react'
import styles from './BurgerNanbar.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { navigationLinks } from '../header-links'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
import cn from 'classnames'
// import { logout } from '../../../../store/reducers/userReducer/userAC'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/shared/consts'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks'

const BurgerNavbar: FC = () => {
	const dispatch = useAppDispatch()
	const [isShown, setIsShown] = useState(false)
	const user = useSelector(getUserAuthData)

	useEffect(() => {
		if (isShown) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'initial'
		}
	}, [isShown])

	const logoutHandler = () => {
		// dispatch(logout())
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
						{navigationLinks.map(link => (
							<Link
								className={styles.link}
								key={'navbar-m' + link.id}
								href={link.href}
							>
								{link.title}
							</Link>
						))}
					</div>
					<div className={styles.auth}>
						{user ? (
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
										<FaUser className={styles.login_symb} />
										<p>Log in</p>
									</Link>
								</button>
								<button className={styles.signup_btn}>
									<Link href={REGISTRATION_ROUTE}>
										<p>Sign in</p>
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
