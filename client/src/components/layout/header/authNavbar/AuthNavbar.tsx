import { FaUser } from 'react-icons/fa'
import Link from 'next/link'
import { FC } from 'react'
import styles from './AuthNavbar.module.scss'
import UserDropdown from './userDropdown/UserDropdown'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/shared/consts'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'

const AuthNavbar: FC = () => {
	const user = useSelector(getUserAuthData)

	return (
		<>
			<div className={styles.left_nav}>
				{user ? (
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
		</>
	)
}

export default AuthNavbar
