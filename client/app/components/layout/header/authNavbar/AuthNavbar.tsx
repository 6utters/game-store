import {
	BASKET_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
} from '../../../../utils/constants'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import Link from 'next/link'
import { FC } from 'react'
import styles from './AuthNavbar.module.scss'

interface IAuthNavbarProps {
	isAuth: boolean
}

const AuthNavbar: FC<IAuthNavbarProps> = ({ isAuth }) => {
	return (
		<div className={styles.left_nav}>
			{isAuth ? (
				<>
					<button className={styles.basket_btn}>
						<Link href={BASKET_ROUTE}>
							<a
								className={
									'flex items-center text-gray-400 hover:text-gray-200 '
								}
							>
								<FaShoppingCart className={styles.basket_img} />
							</a>
						</Link>
					</button>
					<img
						className={styles.user_img}
						src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
						alt='logo'
					/>
				</>
			) : (
				<>
					<button className={styles.login_btn}>
						<Link
							href={LOGIN_ROUTE}
							className={'flex items-center text-gray-400 hover:text-gray-200 '}
						>
							<a>
								<FaUser className={styles.login_symb} />
								<p>Log in</p>
							</a>
						</Link>
					</button>
					<button className={styles.signup_btn}>
						<Link href={REGISTRATION_ROUTE}>
							<a>
								<p>Sigh in</p>
							</a>
						</Link>
					</button>
				</>
			)}
		</div>
	)
}

export default AuthNavbar
