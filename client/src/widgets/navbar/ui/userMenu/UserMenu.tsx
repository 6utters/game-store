import { FC, memo, useCallback } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '@/shared/consts'

import { getIsUserAdmin, getUserAuthData } from '@/entities/User'
import { logOut } from '@/features/authByEmail'

import { useAppDispatch } from '@/shared/lib/hooks'
import { Dropdown } from '@/shared/ui'

import { FaUser } from 'react-icons/fa'
import { UserMenuTrigger } from './userMenuTrigger/UserMenuTrigger'
import { userMenuLinks } from './userMenuLinks'

import styles from './UserMenu.module.scss'

export const UserMenu: FC = memo(() => {
	const dispatch = useAppDispatch()
	const user = useSelector(getUserAuthData)
	const isAdmin = useSelector(getIsUserAdmin)

	const userOptions = userMenuLinks.filter(link => link.adminOnly === false)

	const onLogOutClick = useCallback(async () => {
		await dispatch(logOut())
	}, [dispatch])

	return (
		<div className={styles.userMenu}>
			{user ? (
				<Dropdown
					optionNumber={isAdmin ? userMenuLinks.length : userOptions.length}
					trigger={<UserMenuTrigger userName={user.userName} />}
				>
					<>
						{userMenuLinks.map(link => {
							if (isAdmin && link.adminOnly) {
								return (
									<li className={styles.menuOption}>
										<Link href={link.href}>
											<h3>{link.title}</h3>
										</Link>
									</li>
								)
								return (
									<li className={styles.menuOption}>
										<Link href={link.href}>
											<h3>{link.title}</h3>
										</Link>
									</li>
								)
							}
						})}
						{/*{isAdmin && (*/}
						{/*	<li className={styles.menuOption}>*/}
						{/*		<Link href={ADMIN_ROUTE}>*/}
						{/*			<h3>Admin Panel</h3>*/}
						{/*		</Link>*/}
						{/*	</li>*/}
						{/*)}*/}
						{/*<li className={styles.menuOption}>*/}
						{/*	<button onClick={onLogOutClick}>*/}
						{/*		<h3>Log Out</h3>*/}
						{/*	</button>*/}
						{/*</li>*/}
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
