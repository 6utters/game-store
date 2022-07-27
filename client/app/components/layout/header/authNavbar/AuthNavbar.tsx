import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../../../utils/constants'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'
import { FC } from 'react'
import styles from './AuthNavbar.module.scss'
import UserDropdown from './userDropdown/UserDropdown'
import { useAppSelector } from '../../../../hooks/redux'

const AuthNavbar: FC = () => {
	const { isAuth, user, isLoading } = useAppSelector((state) => state.auth)

	return (
		<>
			{isLoading || (
				<div className={styles.left_nav}>
					{isAuth ? (
						<UserDropdown userName={user && user.userName} />
					) : (
						<>
							<button className={styles.login_btn}>
								<Link
									href={LOGIN_ROUTE}
									className={
										'flex items-center text-gray-400 hover:text-gray-200 '
									}
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
										<p>Sign in</p>
									</a>
								</Link>
							</button>
						</>
					)}
				</div>
			)}
		</>
	)
}

export default AuthNavbar
