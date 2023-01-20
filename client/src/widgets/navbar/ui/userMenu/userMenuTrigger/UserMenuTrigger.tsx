import { FC, memo } from 'react'
import { OnlineUserIcon } from '@/shared/ui'

import styles from './UserMenuTrigger.module.scss'

interface UserMenuTriggerProps {
	userName: string
}

export const UserMenuTrigger: FC<UserMenuTriggerProps> = memo(
	({ userName }) => {
		return (
			<div className={styles.trigger}>
				<OnlineUserIcon />
				<p>{userName}</p>
			</div>
		)
	},
)
