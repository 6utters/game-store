import { FC, memo } from 'react'
import { FaUser } from 'react-icons/fa'

import styles from './OnlineUserIcon.module.scss'

export const OnlineUserIcon: FC = memo(() => (
	<div className={styles.user}>
		<FaUser className={styles.icon} />
		<span className={styles.online}></span>
	</div>
))
