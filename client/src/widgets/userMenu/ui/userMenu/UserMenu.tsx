import { FC, memo, useCallback } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/shared/consts'

import { getIsUserAdmin, getUserAuthData } from '@/entities/User'
import { logOut } from '@/features/authByEmail'

import { useAppDispatch } from '@/shared/lib/hooks'
import { Dropdown } from '@/shared/ui'

import { FaUser } from 'react-icons/fa'
import { UserMenuTrigger } from '../userMenuTrigger/UserMenuTrigger'
import { userMenuLinks } from '../../lib/userMenuLinks'

import { useRouter } from 'next/router'
import styles from './UserMenu.module.scss'

const UserMenu: FC = memo(() => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const user = useSelector(getUserAuthData)
	const isAdmin = useSelector(getIsUserAdmin)

	const userOptions = userMenuLinks.filter(link => !link.adminOnly)

	const onLogOutClick = useCallback(async () => {
		await dispatch(logOut())
	}, [dispatch])

	const onAdminPanelClick = useCallback(async () => {
		await router.push('/admin')
	}, [router])

	return (
		<div className={styles.userMenu}>
			{user ? (
				<Dropdown
					optionNumber={isAdmin ? userMenuLinks.length : userOptions.length}
					trigger={<UserMenuTrigger userName={user.userName} />}
				>
					<>
						{isAdmin && (
							<li className={styles.menuOption}>
								<button onClick={onAdminPanelClick}>
									<h3>Admin Panel</h3>
								</button>
							</li>
						)}
						<li className={styles.menuOption}>
							<button onClick={onLogOutClick}>
								<h3>Log Out</h3>
							</button>
						</li>
					</>
				</Dropdown>
			) : (
				<>
					<button className={styles.login}>
						<Link href={LOGIN_ROUTE}>
							<FaUser className={styles.loginIcon} />
							<p>Log in</p>
						</Link>
					</button>
					<button className={styles.signup}>
						<Link href={REGISTRATION_ROUTE}>
							<p>Sign in</p>
						</Link>
					</button>
				</>
			)}
		</div>
	)
})

export default UserMenu
