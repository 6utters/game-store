import { FC } from 'react'
import styles from './UserDropdown.module.scss'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'
import { ADMIN_ROUTE } from '../../../../../utils/constants'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { logout } from '../../../../../store/reducers/userReducer/userAC'

interface IUserDropdownProps {
	userName: string | null
}

const UserDropdown: FC<IUserDropdownProps> = ({ userName }) => {
	const { user } = useAppSelector((state) => state.user)
	const userRoles = user && user.roles
	const adminRole =
		userRoles && userRoles.find((role) => role.value === 'ADMIN')
	const dispatch = useAppDispatch()
	const logoutHandler = () => {
		dispatch(logout())
	}

	return (
		<div className={styles.dropdown}>
			<div className={styles.dropdown_title}>
				<div className={styles.user_symb}>
					<FaUser className={styles.login_symb} />
					<span className={styles.online}></span>
				</div>
				<p>{userName}</p>
			</div>
			<ul className={styles.dropdown__list}>
				{adminRole && (
					<li className={styles.dropdown__item}>
						<Link href={ADMIN_ROUTE}>
							<a href=''>Admin</a>
						</Link>
					</li>
				)}
				<li className={styles.dropdown__item}>
					<p onClick={logoutHandler}>Log Out</p>
				</li>
			</ul>
		</div>
	)
}

export default UserDropdown
